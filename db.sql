
--

CREATE DATABASE development WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


--ALTER DATABASE development OWNER TO postgres;
--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: trial_signups; Type: TABLE; Schema: public; Owner: postgres
--
--CREATE USER postgres WITH PASSWORD '112233';
--GRANT ALL PRIVILEGES ON DATABASE development TO postgres;

-- Table: public.customer

-- DROP TABLE IF EXISTS public.customer;

-- Create customer table
CREATE TABLE IF NOT EXISTS public.customer
(
    id character varying COLLATE pg_catalog."default" NOT NULL DEFAULT gen_random_uuid(),
    domain text COLLATE pg_catalog."default",
    plan text COLLATE pg_catalog."default",
    admin_password text COLLATE pg_catalog."default",
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    name text COLLATE pg_catalog."default",
    company_name text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    phone_number text COLLATE pg_catalog."default",
    status integer,
    CONSTRAINT customer_pkey PRIMARY KEY (id)
);

-- Create customer_resources table
CREATE TABLE IF NOT EXISTS public.customer_resources
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    network_name text COLLATE pg_catalog."default",
    es_port text COLLATE pg_catalog."default",
    kb_port text COLLATE pg_catalog."default",
    status text COLLATE pg_catalog."default",
    subnet text COLLATE pg_catalog."default",
    CONSTRAINT customer_resources_pkey PRIMARY KEY (id),
    CONSTRAINT customer_resources_es_port_key UNIQUE (es_port),
    CONSTRAINT customer_resources_kb_port_key UNIQUE (kb_port)
);