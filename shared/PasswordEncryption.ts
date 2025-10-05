import crypto from 'crypto';

interface EncryptedData {
  iv: string;
  salt: string;
  encryptedData: string;
  authTag: string;
}

class PasswordEncryption {
  private readonly algorithm = 'aes-256-gcm';
  private readonly ivLength = 16;
  private readonly saltLength = 32;
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  // Derive key from secret + salt using PBKDF2
  private deriveKey(salt: Buffer): Buffer {
    return crypto.pbkdf2Sync(this.secretKey, salt, 100000, 32, 'sha256');
  }

  // Encrypt password with salt
  encrypt(password: string): EncryptedData {
    const salt = crypto.randomBytes(this.saltLength);
    const derivedKey = this.deriveKey(salt);
    const iv = crypto.randomBytes(this.ivLength);
    
    const cipher = crypto.createCipheriv(this.algorithm, derivedKey, iv);
    
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      iv: iv.toString('hex'),
      salt: salt.toString('hex'),
      encryptedData: encrypted,
      authTag: authTag.toString('hex')
    };
  }

  // Decrypt password using stored salt
  decrypt(encrypted: EncryptedData): string {
    const salt = Buffer.from(encrypted.salt, 'hex');
    const derivedKey = this.deriveKey(salt);
    
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      derivedKey,
      Buffer.from(encrypted.iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(encrypted.authTag, 'hex'));
    
    let decrypted = decipher.update(encrypted.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }

  // Static method to generate encryption key
  static generateKey(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}

export default PasswordEncryption;
export type { EncryptedData };