DROP TABLE IF EXISTS vanhacks2019.post_images;
DROP TABLE IF EXISTS vanhacks2019.pickups;
DROP TABLE IF EXISTS vanhacks2019.organization;
DROP TABLE IF EXISTS vanhacks2019.posts;

CREATE TABLE vanhacks2019.organization (
    id SERIAL PRIMARY KEY,
    name varchar COLLATE pg_catalog."default" NOT NULL,
    phone_no varchar(12) COLLATE pg_catalog."default" NOT NULL,
    email varchar COLLATE pg_catalog."default" NOT NULL,
    password varchar COLLATE pg_catalog."default" NOT NULL
);

CREATE TABLE vanhacks2019.posts (
    id SERIAL PRIMARY KEY,
    title varchar(255) COLLATE pg_catalog."default" NOT NULL,
    quantity integer,
    notes text COLLATE pg_catalog."default",
    pickup_deadline timestamp without time zone,
    pickup_location text COLLATE pg_catalog."default",
    phone varchar(12) COLLATE pg_catalog."default",
    item_type varchar COLLATE pg_catalog."default"
);

CREATE TABLE vanhacks2019.post_images (
    id SERIAL PRIMARY KEY,
    post_id integer NOT NULL,
    order_no integer NOT NULL,
    url varchar COLLATE pg_catalog."default",
    CONSTRAINT post_idx FOREIGN KEY (post_id)
        REFERENCES vanhacks2019.posts (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE vanhacks2019.pickups (
    id SERIAL PRIMARY KEY,
    post_id integer NOT NULL,
    organization_id integer NOT NULL,
    datetime timestamp without time zone NOT NULL,
    status varchar COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT org_idx FOREIGN KEY (organization_id)
        REFERENCES vanhacks2019.organization (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT post_idx FOREIGN KEY (post_id)
        REFERENCES vanhacks2019.posts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
