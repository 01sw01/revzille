import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCustomerSchema } from "@shared/schema";
import { insertCustomerResourcesSchema } from "@shared/schema";
import PasswordEncryption from "@shared/PasswordEncryption"

import { fromZodError } from "zod-validation-error";
import bcrypt from "bcrypt";
import { sendAdminNotification, sendWelcomeEmail } from "./emailService";
import { Plane } from "lucide-react";

export async function registerRoutes(app: Express): Promise<Server> {
  // Trial signup endpoint
  app.post("/api/trial-signup", async (req, res) => {
    try {
      const validatedData = insertCustomerSchema.parse(req.body);
      console.log("🔥 TRIAL SIGNUP CALLED! Request body:", req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getCustomerByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(400).json({ 
          message: "An account with this email already exists" 
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      //encrypt admin password
      const encryptor = new PasswordEncryption(process.env.ENCRYPTION_KEY!);

      const encryptedAdminPassword = encryptor.encrypt(validatedData.adminPassword).encryptedData;
      
      // Create trial signup record
      const signupData = {
        name: validatedData.name,
        companyName: validatedData.companyName,
        email: validatedData.email,
        password: hashedPassword,
        phoneNumber: validatedData.phoneNumber,
        adminPassword: encryptedAdminPassword,
        plan: validatedData.plan,

      };

      const newSignup = await storage.createCustomer(signupData);


      // Send emails (admin notification and welcome email)
      await Promise.all([
        sendAdminNotification({
          name: validatedData.name,
          companyName: validatedData.companyName,
          email: validatedData.email,
          phoneNumber: validatedData.phoneNumber,
        }),
        sendWelcomeEmail(validatedData.email, validatedData.name)
      ]);

      /* Creating a customerResources record with only customer ID. Other fields are blank
      const resourceData = {
        id: newSignup.id ,
        network_name: "",
        es_port: "",
        kb_port: "",
        status: -1,
        subnet: ""

      };

      const newResource = await storage.createCustomerResource(resourceData);*/
      
      res.status(201).json({ 
        message: "Trial signup successful! Welcome email sent.",
        id: newSignup.id 
      });
    } catch (error: any) {
     /* if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.toString() 
        });
      }
      
      console.error("Trial signup error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });*/
      console.log("🚨🚨🚨 TRIAL SIGNUP ERROR DETAILS:");
  console.log("Error name:", error.name);
  console.log("Error message:", error.message);
  console.log("Error code:", error.code);
  console.log("Full error object:", JSON.stringify(error, null, 2));
  
  if (error.name === "ZodError") {
    console.log("🔍 Zod validation errors:", error.errors);
    const validationError = fromZodError(error);
    return res.status(400).json({ 
      message: validationError.toString() 
    });
  }
  
  console.log("🚨🚨🚨 END ERROR DETAILS");
  console.error("Trial signup error:", error);
  res.status(500).json({ 
    message: "Internal server error" 
  });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
