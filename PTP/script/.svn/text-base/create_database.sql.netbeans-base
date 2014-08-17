CREATE PROCEDURAL LANGUAGE plpgsql;









CREATE TABLE RESOURCE_TABLE (
    object_uuid     UUID            NOT NULL,                   -- Unique object identifier

    owner_uuid      UUID            NOT NULL,                   -- Owner of resource
    resource_type   INTEGER         NOT NULL DEFAULT 0,         -- Internal (application defined) resource type identifier
    resource_path   TEXT            NOT NULL,                   -- Relative resource path

    original_name   TEXT,                                       -- Original (upoaded) resource file name (if exists)
    mime_type       VARCHAR(50),                                -- Resource mime type
    file_size       BIGINT          NOT NULL,                   -- Resource binary size
    image_width     INTEGER,                                    -- Width of image (if resource is image)
    image_height    INTEGER,                                    -- Height of image (if resource is image)

    object_order    BIGINT          NOT NULL DEFAULT 0          -- Order of resource in owner scope
);

ALTER TABLE RESOURCE_TABLE ADD CONSTRAINT RESOURCE_TABLE__PK PRIMARY KEY(object_uuid);

CREATE INDEX RESOURCE_TABLE__OWNER__INDEX      ON RESOURCE_TABLE(owner_uuid);
CREATE INDEX RESOURCE_TABLE__OWNER_TYPE__INDEX ON RESOURCE_TABLE(owner_uuid, resource_type);















CREATE TABLE ROLE_TABLE(
                        object_uuid             UUID            NOT NULL,
                        role_type               INTEGER         NOT NULL    DEFAULT 0
);

ALTER TABLE ROLE_TABLE ADD CONSTRAINT ROLE_TABLE_PK PRIMARY KEY(object_uuid);

ALTER TABLE ROLE_TABLE ADD CONSTRAINT ROLE_TABLE__ROLE_TYPE__UNIQUE UNIQUE(role_type);

CREATE INDEX ROLE_TABLE__ROLE_TYPE ON ROLE_TABLE(role_type);

















CREATE TABLE USER_TABLE(
                        object_uuid             UUID            NOT NULL,
                        user_email              TEXT            NOT NULL,
                        user_password           TEXT            NOT NULL,
                        user_name               TEXT            NOT NULL,
                        user_surname            TEXT            NOT NULL,
                        user_patronymic         TEXT            NOT NULL,
                        user_phone_mobile       TEXT            NOT NULL,
                        user_organization_name  TEXT,
                        user_position           TEXT,
                        user_birthday           DATE,
                        registration_date       TIMESTAMP       NOT NULL,
                        is_active               BOOLEAN         NOT NULL    DEFAULT TRUE,
                        activation_date         DATE,
                        activation_code         TEXT
);

ALTER TABLE USER_TABLE ADD CONSTRAINT USER_TABLE_PK PRIMARY KEY(object_uuid);

ALTER TABLE USER_TABLE ADD CONSTRAINT USER_TABLE__USER_EMAIL__UNIQUE UNIQUE(user_email);


CREATE INDEX USER_TABLE__USER_EMAIL__INDEX          ON USER_TABLE(user_email);
CREATE INDEX USER_TABLE__USER_LOGIN_PASSWORD__INDEX ON USER_TABLE(user_email, user_password, is_active);













CREATE TABLE USER_ROLE_REF(
                            user_uuid       UUID        NOT NULL,
                            role_uuid       UUID        NOT NULL
);

ALTER TABLE USER_ROLE_REF ADD CONSTRAINT USER_ROLE_REF_PK PRIMARY KEY(user_uuid, role_uuid);

ALTER TABLE USER_ROLE_REF ADD CONSTRAINT USER_ROLE_REF__USER_UUID_FK FOREIGN KEY(user_uuid) REFERENCES USER_TABLE(object_uuid);
ALTER TABLE USER_ROLE_REF ADD CONSTRAINT USER_ROLE_REF__ROLE_UUID_FK FOREIGN KEY(role_uuid) REFERENCES ROLE_TABLE(object_uuid);

CREATE INDEX USER_ROLE_REF__USER__INDEX ON USER_ROLE_REF(user_uuid);
CREATE INDEX USER_ROLE_REF__ROLE__INDEX ON USER_ROLE_REF(role_uuid);







CREATE TABLE PROPERTY_GROUP_TABLE(
                                    object_uuid             UUID        NOT NULL,
                                    group_name              TEXT,
                                    property_group_order    BIGINT      NOT NULL DEFAULT 0,
                                    active                  BOOLEAN     NOT NULL DEFAULT TRUE,
                                    group_name_en           TEXT
);
ALTER TABLE PROPERTY_GROUP_TABLE ADD CONSTRAINT PROPERTY_GROUP_TABLE_PK PRIMARY KEY(object_uuid);








CREATE TABLE PROPERTY_TABLE(
                            object_uuid             UUID        NOT NULL,
                            group_uuid              UUID        NOT NULL,
                            property_name           TEXT        NOT NULL,
                            property_type           TEXT        NOT NULL,
                            property_required       BOOLEAN     NOT NULL    DEFAULT FALSE,
                            is_editable             BOOLEAN     NOT NULL    DEFAULT TRUE,
                            property_default_value  UUID,
                            property_notation       TEXT,
                            property_order          BIGINT      NOT NULL    DEFAULT 0
);

ALTER TABLE PROPERTY_TABLE ADD CONSTRAINT PROPERTY_TABLE_PK PRIMARY KEY(object_uuid);

ALTER TABLE PROPERTY_TABLE ADD CONSTRAINT PROPERTY_TABLE__GROUP_UUID FOREIGN KEY(group_uuid)  REFERENCES PROPERTY_GROUP_TABLE(object_uuid);

CREATE INDEX PROPERTY_TABLE__PROPERTY_NAME__INDEX ON PROPERTY_TABLE(property_name);
CREATE INDEX PROPERTY_TABLE__GROUP_UUID__INDEX ON PROPERTY_TABLE(group_uuid);












CREATE TABLE PROPERTY_VALUE (
    object_uuid         UUID            NOT NULL,
    property_uuid       UUID            NOT NULL,               -- Reference on property table
    owner_uuid          UUID            NOT NULL,               -- Reference on property owner table
    owner_class         VARCHAR(255)    NOT NULL,               -- Owner class name (for backward object search)

    value_string        TEXT,                                   -- Value for string types
    value_number        NUMERIC(32, 10),                        -- Value for numeric types
    value_timestamp     TIMESTAMP,                              -- Value for date/time types
    value_boolean       BOOLEAN,                                -- Value for boolean types
    value_bytes         BYTEA,                                  -- Value for binary types
    value_ref           UUID                                    -- Value for Reference types (Resource etc.)

);
ALTER TABLE PROPERTY_VALUE ADD CONSTRAINT PROPERTY_VALUE_PK PRIMARY KEY(object_uuid);

CREATE INDEX PROPERTY_VALUE__OWNER__INDEX                        ON PROPERTY_VALUE(owner_uuid);
CREATE INDEX PROPERTY_VALUE__PROPERTY__INDEX                     ON PROPERTY_VALUE(property_uuid);













CREATE TABLE PROGRAM_TABLE(
                            object_uuid                         UUID            NOT NULL,
                            program_name                        TEXT            NOT NULL,
                            program_name_en                     TEXT            NOT NULL,
                            program_country                     TEXT            NOT NULL,
                            program_region                      TEXT            NOT NULL,
                            program_registered_begin_date       DATE            NOT NULL,
                            program_registered_end_date         DATE            NOT NULL,
                            program_begin_date                  DATE            NOT NULL,
                            program_end_date                    DATE            NOT NULL

);

ALTER TABLE PROGRAM_TABLE ADD CONSTRAINT PROGRAM_TABLE_PK PRIMARY KEY(object_uuid);

CREATE INDEX PROGRAM_TABLE__PROGRAM_NAME__INDEX ON PROGRAM_TABLE(program_name);










CREATE TABLE PROGRAM_PROPERTY_GROUP_REF(
                                    program_uuid                UUID        NOT NULL,
                                    property_group_uuid         UUID        NOT NULL
);

ALTER TABLE PROGRAM_PROPERTY_GROUP_REF ADD CONSTRAINT PROGRAM_PROPERTY_GROUP_REF_PK PRIMARY KEY(program_uuid, property_group_uuid);

ALTER TABLE PROGRAM_PROPERTY_GROUP_REF ADD CONSTRAINT PROGRAM_PROPERTY_GROUP_REF__PROGRAM_FK FOREIGN KEY(program_uuid) REFERENCES PROGRAM_TABLE(object_uuid);
ALTER TABLE PROGRAM_PROPERTY_GROUP_REF ADD CONSTRAINT PROGRAM_PROPERTY_GROUP_REF__PROPERTY_GROUP_FK FOREIGN KEY(property_group_uuid) REFERENCES PROPERTY_GROUP_TABLE(object_uuid);

CREATE INDEX PROGRAM_PROPERTY_GROUP_REF__PROGRAM__INDEX ON PROGRAM_PROPERTY_GROUP_REF(program_uuid);
CREATE INDEX PROGRAM_PROPERTY_GROUP_REF__PROPERTY__INDEX ON PROGRAM_PROPERTY_GROUP_REF(property_group_uuid);












CREATE TABLE HELP_PEOPLE_TABLE(
                                object_uuid               UUID            NOT NULL,
                                program_uuid              UUID            NOT NULL,
                                help_user_fio             TEXT,
                                help_user_relation        TEXT,
                                help_user_phone_mobile    TEXT,
                                help_user_phone_home      TEXT,
                                help_user_email           TEXT
);

ALTER TABLE HELP_PEOPLE_TABLE ADD CONSTRAINT HELP_PEOPLE_TABLE_PK PRIMARY KEY(object_uuid);

ALTER TABLE HELP_PEOPLE_TABLE ADD CONSTRAINT HELP_PEOPLE_TABLE__PROGRAM_UUID_FK FOREIGN KEY(program_uuid) REFERENCES PROGRAM_TABLE(object_uuid);

CREATE INDEX HELP_PEOPLE_TABLE__PROGRAM_UUID__INDEX ON HELP_PEOPLE_TABLE(program_uuid);










CREATE TABLE USER_PROGRAM_REF(
                                object_uuid                         UUID        NOT NULL,
                                user_uuid                           UUID        NOT NULL,
                                program_uuid                        UUID        NOT NULL

--                                 foreign_passport                    BOOLEAN,
--                                 foreign_passport_valid_date         DATE,
--                                 foreign_passport_series             TEXT,
--                                 foreign_passport_number             TEXT,
--
--                                 identification_code                 TEXT,
--                                 internal_passport_series            TEXT,
--                                 internal_passport_number            TEXT,
--                                 internal_passport_issued            TEXT,
--
--                                 user_name_en                        TEXT,
--                                 user_surname_en                     TEXT,
--                                 user_surname_rus                    TEXT,
--                                 user_birthday                       DATE,
--                                 user_birth_country                  TEXT,
--                                 user_birth_region                   TEXT,
--                                 user_birth_locality                 TEXT,
--                                 user_residence_country              TEXT,
--                                 user_nationality                    TEXT,
--                                 user_sex                            TEXT,
--                                 user_first_surname                  TEXT,
--                                 user_family                         TEXT,
--                                 user_fio_nationality_spouse         TEXT,
--                                 user_fio_sex_birthday_children      TEXT,
--                                 user_registered_address_street      TEXT,
--                                 user_registered_address_house       TEXT,
--                                 user_registered_address_apartment   TEXT,
--                                 user_registered_address_building    TEXT,
--                                 user_registered_address_district    TEXT,
--                                 user_registered_address_region      TEXT,
--                                 user_registered_address_city        TEXT,
--                                 user_registered_address_index       TEXT,
--                                 user_phone_home                     TEXT,
--                                 user_skype                          TEXT,
--                                 user_disability                     TEXT
);

ALTER TABLE USER_PROGRAM_REF ADD CONSTRAINT USER_UUID__UUID_PK PRIMARY KEY(object_uuid);

ALTER TABLE USER_PROGRAM_REF ADD CONSTRAINT USER_PROGRAM_REF__USER_UUID_FK FOREIGN KEY(user_uuid) REFERENCES USER_TABLE(object_uuid);
ALTER TABLE USER_PROGRAM_REF ADD CONSTRAINT USER_PROGRAM_REF__PROGRAM_UUID_FK FOREIGN KEY(program_uuid) REFERENCES PROGRAM_TABLE(object_uuid);

CREATE INDEX USER_PROGRAM_REF__USER_UUID__INDEX ON USER_PROGRAM_REF(user_uuid);
CREATE INDEX USER_PROGRAM_REF__PROGRAM_UUID__INDEX ON USER_PROGRAM_REF(program_uuid);
CREATE INDEX USER_PROGRAM_REF__UUID__INDEX ON USER_PROGRAM_REF(object_uuid);














CREATE TABLE RECENSENT_PROGRAM_REF(
                                    recensent_uuid       UUID        NOT NULL,
                                    program_uuid         UUID        NOT NULL
);

ALTER TABLE RECENSENT_PROGRAM_REF ADD CONSTRAINT RECENSENT_UUID__PROGRAM_UUID_PK PRIMARY KEY(recensent_uuid,program_uuid);

ALTER TABLE RECENSENT_PROGRAM_REF ADD CONSTRAINT RECENSENT_PROGRAM_REF__RECENSENT_UUID_FK FOREIGN KEY(recensent_uuid) REFERENCES USER_TABLE(object_uuid);
ALTER TABLE RECENSENT_PROGRAM_REF ADD CONSTRAINT RECENSENT_PROGRAM_REF__PROGRAM_UUID_FK FOREIGN KEY(program_uuid) REFERENCES PROGRAM_TABLE(object_uuid);

CREATE INDEX RECENSENT_PROGRAM_REF__RECENSENT_UUID__INDEX ON RECENSENT_PROGRAM_REF(recensent_uuid);
CREATE INDEX RECENSENT_PROGRAM_REF__PROGRAM_UUID__INDEX ON RECENSENT_PROGRAM_REF(program_uuid);












CREATE TABLE EVENT_TABLE(
                        object_uuid         UUID        NOT NULL,
                        program_uuid        UUID        NOT NULL,
                        event_name          TEXT        NOT NULL,
                        event_description   TEXT        NOT NULL
);

ALTER TABLE EVENT_TABLE ADD CONSTRAINT EVENT_TABLE_PK PRIMARY KEY(object_uuid);

ALTER TABLE EVENT_TABLE ADD CONSTRAINT EVENT_TABLE__PROGRAM_FK FOREIGN KEY(program_uuid) REFERENCES PROGRAM_TABLE(object_uuid);

CREATE INDEX EVENT_TABLE__NAME__INDEX ON EVENT_TABLE(event_name);












CREATE TABLE EVENT_PROPERTY_REF(
                                event_uuid          UUID        NOT NULL,
                                property_uuid       UUID        NOT NULL
);

ALTER TABLE EVENT_PROPERTY_REF ADD CONSTRAINT EVENT_PROPERTY_REF_PK PRIMARY KEY(event_uuid, property_uuid);

ALTER TABLE EVENT_PROPERTY_REF ADD CONSTRAINT EVENT_PROPERTY_REF__EVENT_FK FOREIGN KEY(event_uuid) REFERENCES EVENT_TABLE(object_uuid);
ALTER TABLE EVENT_PROPERTY_REF ADD CONSTRAINT EVENT_PROPERTY_REF__PROPERTY_FK FOREIGN KEY(property_uuid) REFERENCES PROPERTY_TABLE(object_uuid);

CREATE INDEX EVENT_PROPERTY_REF__EVENT__INDEX ON EVENT_PROPERTY_REF(event_uuid);
CREATE INDEX EVENT_PROPERTY_REF__PROPERTY__INDEX ON EVENT_PROPERTY_REF(property_uuid);