
--

CREATE DATABASE development WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


--ALTER DATABASE development OWNER TO postgres;
--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: trial_signups; Type: TABLE; Schema: public; Owner: postgres
--
--CREATE USER postgres WITH PASSWORD '112233';
--GRANT ALL PRIVILEGES ON DATABASE development TO postgres;

CREATE TABLE public.trial_signups (
    id character varying DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    company_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    phone_number text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);



--
-- TOC entry 218 (class 1259 OID 16400)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying DEFAULT gen_random_uuid() NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);



--
-- TOC entry 4648 (class 2606 OID 16399)
-- Name: trial_signups trial_signups_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trial_signups
    ADD CONSTRAINT trial_signups_email_unique UNIQUE (email);


--
-- TOC entry 4650 (class 2606 OID 16397)
-- Name: trial_signups trial_signups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trial_signups
    ADD CONSTRAINT trial_signups_pkey PRIMARY KEY (id);


--
-- TOC entry 4652 (class 2606 OID 16407)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4654 (class 2606 OID 16409)
-- Name: users users_username_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_unique UNIQUE (username);


-- Completed on 2025-08-24 16:36:58

--
-- PostgreSQL database dump complete
--

--\unrestrict L9A5R2NdDgIS36td5hGnqbXGrIuHozcXUIlk1Ds7YQ77XoBKRsNjLTeTTbBpbrz

