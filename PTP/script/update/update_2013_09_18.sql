

CREATE TABLE PROPERTY_ATTRIBUTES (
    object_uuid             UUID        NOT NULL,
    max_length_active       boolean     DEFAULT FALSE,
    max_length              INTEGER     DEFAULT 0,
    min_length_active       boolean     DEFAULT FALSE,
    min_length              INTEGER     DEFAULT 0,
    fix_length_active       boolean     DEFAULT FALSE,
    fix_length              INTEGER     DEFAULT 0,
    date_type               TEXT,
    data_format             TEXT                    -- regular expression
);

ALTER TABLE PROPERTY_ATTRIBUTES ADD CONSTRAINT PROPERTY_ATTRIBUTES_PK PRIMARY KEY(object_uuid);


ALTER TABLE property_table ADD COLUMN property_id      TEXT;
ALTER TABLE property_table ADD COLUMN attributes_uuid  UUID;
ALTER TABLE property_table ADD CONSTRAINT PROPERTY_ATTRIBUTES__ATTRIBUTES_UUID_FK FOREIGN KEY(attributes_uuid) REFERENCES PROPERTY_ATTRIBUTES(object_uuid);


ALTER TABLE PROPERTY_TABLE DROP COLUMN data_type;
ALTER TABLE PROPERTY_TABLE DROP COLUMN min_length;
ALTER TABLE PROPERTY_TABLE DROP COLUMN max_length;
ALTER TABLE PROPERTY_TABLE DROP COLUMN fix_length;

ALTER TABLE property_table ALTER COLUMN property_default_value TYPE TEXT;

UPDATE "public".property_table SET(property_default_value) = ('name') WHERE object_uuid = 'a007f130-dc13-4717-a7a9-bb7de86713d2';
UPDATE "public".property_table SET(property_default_value) = ('surname') WHERE object_uuid = '76ccd760-d606-4eba-875c-5476b0354555';
UPDATE "public".property_table SET(property_default_value) = ('patronymic') WHERE object_uuid = '0b01362b-d540-4ec7-97d5-0792820c057f';
UPDATE "public".property_table SET(property_default_value) = ('birthday') WHERE object_uuid = 'ef61eba6-ac5d-4663-8164-242029bfb8ce';
UPDATE "public".property_table SET(property_default_value) = ('email') WHERE object_uuid = '3c888f4c-d483-4099-a044-8f37ab040202';



INSERT INTO "public".property_attributes (object_uuid, date_type)VALUES ('f3220c17-cc77-4511-a20f-a48f0d415d87','birthday');

UPDATE "public".property_table SET(attributes_uuid) = ('f3220c17-cc77-4511-a20f-a48f0d415d87') WHERE object_uuid = 'ef61eba6-ac5d-4663-8164-242029bfb8ce';

------------------------------------------------------------------------------------



INSERT INTO "public".property_attributes (object_uuid, data_format, fix_length_active, fix_length)VALUES ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c','^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$', true , 13);

UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = 'a835c759-d4d4-4f45-8fa7-6416e6d2b82f';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '38632c27-4b02-43cd-96aa-1bd72b2cae3e';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '296bb038-548b-4211-9d93-1eb104744995';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '14a5515c-611b-4e16-8bf0-7dd632eaebc0';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '31602169-ec4c-411f-b2eb-de6f7ff296a8';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '9b9e979b-6447-4d7f-908a-4094110837db';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = 'f11be4bb-87e4-47fd-ba65-ae70d3df6588';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '0ffdc766-b02d-4fce-bccf-ea7602f993f0';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '8c66c045-00cf-4f16-8c20-b8bd32a18648';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = 'edda790d-e0a2-4a77-ba78-bca1c99e0f98';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '1fae9c24-4851-41e9-bfcd-d622848190c1';
UPDATE "public".property_table SET(attributes_uuid) = ('9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c') WHERE object_uuid = '028b3a78-0ed0-45d9-a08c-77beacc89b11';

------------------------------------------------------------------------------------
INSERT INTO "public".property_attributes (object_uuid, data_format)VALUES ('ea773831-a5c0-46cc-ab11-039b28c331d9','^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$');


UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = '3c888f4c-d483-4099-a044-8f37ab040202';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = 'b33d341e-ccb2-4237-a9d4-9276d96710ea';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = '75192cff-1713-4755-a4f9-054ba6328bac';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = 'e93c2df0-d3b8-4dbb-82c0-6b94711f965d';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = '53be9bf5-6877-44dc-af57-2a2fcafab089';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = '605bd86d-fbdb-439b-bda0-22f212af83cb';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = 'bc90bd6b-245d-45ee-baee-8ebe39b279c3';
UPDATE "public".property_table SET(attributes_uuid) = ('ea773831-a5c0-46cc-ab11-039b28c331d9') WHERE object_uuid = '52c589d9-9fd0-493f-a563-f24b88eba716';


-----------------------------------------------------------------------------------

ALTER TABLE property_table ALTER COLUMN group_uuid DROP NOT NULL;


CREATE TABLE FORM_TABLE (
    object_uuid             UUID        NOT NULL,
    property_uuid           UUID        NOT NULL
);

ALTER TABLE FORM_TABLE ADD CONSTRAINT FORM_TABLE__PK PRIMARY KEY(object_uuid);

ALTER TABLE PROPERTY_VALUE ADD COLUMN form_uuid     UUID;


-----------------------------------------------------------------------------------


ALTER TABLE PROPERTY_ATTRIBUTES ADD COLUMN is_multi_fields  BOOLEAN  DEFAULT FALSE;

ALTER TABLE PROPERTY_ATTRIBUTES ADD COLUMN max_fields_count INTEGER  DEFAULT 1;

ALTER TABLE PROPERTY_ATTRIBUTES ADD COLUMN layout_form_fields TEXT ;

UPDATE "public".property_table SET(property_type) = ('FORM') WHERE object_uuid = '4cf4da4c-7396-4874-9ab7-d6827ad1ecad';

ALTER TABLE PROPERTY_TABLE DROP CONSTRAINT property_table__group_uuid;

UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 0) WHERE object_uuid = '5a0f245b-855a-424d-9312-e70fe026fb06';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 5) WHERE object_uuid = '9a6a00cf-efc3-4022-95ec-3e817bc6012c';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 10) WHERE object_uuid = '6c959f28-59b9-4a10-b5c7-f9d4094d8ec0';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 15) WHERE object_uuid = '2d4ae3b9-0326-4a4a-8dca-cf74eca9a2aa';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 20) WHERE object_uuid = 'fd500df4-c217-4997-9ed8-fbebf90d00bf';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 25) WHERE object_uuid = '867ba5ca-25e8-4cc5-9237-27a0c0e9cf84';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 30) WHERE object_uuid = '97375997-0a2a-4eac-91ad-ae98567ed8bf';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 35) WHERE object_uuid = '0714aaf1-a4e9-4f40-a2a2-bab8c2f9f182';

DELETE FROM "public".property_value WHERE property_uuid = '964d83e8-1800-46c4-b1a0-a270edcfe772';
DELETE FROM "public".property_value WHERE property_uuid = '8efd46bf-b0b4-42a7-95f7-67ba42194504';
DELETE FROM "public".property_value WHERE property_uuid = 'b6fb536d-5367-40d8-bf0a-027d59a1e938';
DELETE FROM "public".property_value WHERE property_uuid = 'c3551703-5647-4fba-9d91-8c9804c956ff';
DELETE FROM "public".property_value WHERE property_uuid = '278cfd6c-c6ed-4f68-8cff-cd67aeab6dc5';
DELETE FROM "public".property_value WHERE property_uuid = 'b5d4ad4f-f58a-4d06-b9fb-aba26688353d';
DELETE FROM "public".property_value WHERE property_uuid = '16294ab7-4e8e-4a4a-a8d7-4df54cb11949';
DELETE FROM "public".property_value WHERE property_uuid = '5128934b-4aee-44cc-a602-1be9ca58402c';
DELETE FROM "public".property_value WHERE property_uuid = '516c103c-24ec-433c-8b3f-bde2af3681bb';

DELETE FROM "public".property_table WHERE object_uuid = '964d83e8-1800-46c4-b1a0-a270edcfe772';
DELETE FROM "public".property_table WHERE object_uuid = '8efd46bf-b0b4-42a7-95f7-67ba42194504';
DELETE FROM "public".property_table WHERE object_uuid = 'b6fb536d-5367-40d8-bf0a-027d59a1e938';
DELETE FROM "public".property_table WHERE object_uuid = 'c3551703-5647-4fba-9d91-8c9804c956ff';
DELETE FROM "public".property_table WHERE object_uuid = '278cfd6c-c6ed-4f68-8cff-cd67aeab6dc5';
DELETE FROM "public".property_table WHERE object_uuid = 'b5d4ad4f-f58a-4d06-b9fb-aba26688353d';
DELETE FROM "public".property_table WHERE object_uuid = '16294ab7-4e8e-4a4a-a8d7-4df54cb11949';
DELETE FROM "public".property_table WHERE object_uuid = '5128934b-4aee-44cc-a602-1be9ca58402c';
DELETE FROM "public".property_table WHERE object_uuid = '516c103c-24ec-433c-8b3f-bde2af3681bb';

UPDATE "public".property_table SET(property_type) = ('TEXT') WHERE object_uuid = 'f7d7a6df-4c9b-4a32-9466-cb6594811bbe';

UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 40) WHERE object_uuid = '40ab1eeb-be10-4562-ab1b-a304ebfe4378';
UPDATE "public".property_table SET(group_uuid, property_order) = ('4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 45) WHERE object_uuid = 'd5bd051c-a930-4fb3-bda2-a7f12a4991c9';

DELETE FROM "public".property_value WHERE property_uuid = '40ab1eeb-be10-4562-ab1b-a304ebfe4378';
DELETE FROM "public".property_value WHERE property_uuid = 'd5bd051c-a930-4fb3-bda2-a7f12a4991c9';
DELETE FROM "public".property_value WHERE property_uuid = '334f0936-d9dc-42c3-950b-befce19c9314';
DELETE FROM "public".property_value WHERE property_uuid = '80755550-0b83-49c4-b131-76feef9fa923';

DELETE FROM "public".property_table WHERE object_uuid = '334f0936-d9dc-42c3-950b-befce19c9314';
DELETE FROM "public".property_table WHERE object_uuid = '80755550-0b83-49c4-b131-76feef9fa923';

DELETE FROM "public".property_value WHERE property_uuid = '5a0f245b-855a-424d-9312-e70fe026fb06';
DELETE FROM "public".property_value WHERE property_uuid = '9a6a00cf-efc3-4022-95ec-3e817bc6012c';
DELETE FROM "public".property_value WHERE property_uuid = '6c959f28-59b9-4a10-b5c7-f9d4094d8ec0';
DELETE FROM "public".property_value WHERE property_uuid = '2d4ae3b9-0326-4a4a-8dca-cf74eca9a2aa';
DELETE FROM "public".property_value WHERE property_uuid = 'fd500df4-c217-4997-9ed8-fbebf90d00bf';
DELETE FROM "public".property_value WHERE property_uuid = '867ba5ca-25e8-4cc5-9237-27a0c0e9cf84';
DELETE FROM "public".property_value WHERE property_uuid = '97375997-0a2a-4eac-91ad-ae98567ed8bf';
DELETE FROM "public".property_value WHERE property_uuid = '0714aaf1-a4e9-4f40-a2a2-bab8c2f9f182';

ALTER TABLE FORM_TABLE ADD COLUMN owner_uuid UUID NOT NULL ;

-----------------------------------------------------------------------------------

INSERT INTO "public".property_attributes (
                                            object_uuid,
                                            is_multi_fields,
                                            max_fields_count
                                            )VALUES(
                                                    '0b05bad0-ce33-451f-a89f-4bbd526e32be',
                                                    true,
                                                    10
                                                    );


INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order,
                                    attributes_uuid
                                    )VALUES(
                                            'ead60e5f-50de-4632-8009-21ade5b20682',
                                            '081aacab-42b0-41e8-b40a-b0d3a9f914a0',
                                            'Навчальні заклади',
                                            'FORM',
                                            false,
                                            false,
                                            '',
                                            0,
                                            '0b05bad0-ce33-451f-a89f-4bbd526e32be'
                                            );

UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'dc9251d7-a557-4fed-ac3e-14eee9e8d382';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'ec49d947-9726-4079-b34a-197a52598f62';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'eb144ccf-565a-4aeb-8baf-eaf9bfa7437e';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = '9417f35d-93fb-42b6-bd05-54b2e2b0553c';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'a9204bd9-e9ea-4ae5-bd96-d1a3093e6a32';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'ab7ecf3f-8ba9-4180-9ad8-518325c35517';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'ff27b45b-9a73-40cd-8073-07c61b6806c1';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'd0ed9d89-b5e9-43b5-bfd2-4fe46def73f1';
UPDATE "public".property_table  SET (group_uuid) = ('ead60e5f-50de-4632-8009-21ade5b20682') WHERE object_uuid = 'acf2988f-36dd-41a7-a9b4-ff090ccbb578';


DELETE FROM "public".property_table WHERE object_uuid = 'a975797a-2076-40b0-9351-db99b7887fee';
DELETE FROM "public".property_value WHERE property_uuid = 'a975797a-2076-40b0-9351-db99b7887fee';

DELETE FROM "public".property_table WHERE object_uuid = '1da693fc-05f5-4257-a86b-04cd07c5379b';
DELETE FROM "public".property_value WHERE property_uuid = '1da693fc-05f5-4257-a86b-04cd07c5379b';

DELETE FROM "public".property_table WHERE object_uuid = '16e249a4-f950-46f5-89a9-b19600d12e3c';
DELETE FROM "public".property_value WHERE property_uuid = '16e249a4-f950-46f5-89a9-b19600d12e3c';

DELETE FROM "public".property_table WHERE object_uuid = 'd0fda106-4c7d-4f94-b4ff-728c9633ee68';
DELETE FROM "public".property_value WHERE property_uuid = 'd0fda106-4c7d-4f94-b4ff-728c9633ee68';

DELETE FROM "public".property_table WHERE object_uuid = '67b3a771-66cc-4dac-8528-58cbc5651639';
DELETE FROM "public".property_value WHERE property_uuid = '67b3a771-66cc-4dac-8528-58cbc5651639';

DELETE FROM "public".property_table WHERE object_uuid = '3eb0351f-ca78-420a-8695-f804e55b52b3';
DELETE FROM "public".property_value WHERE property_uuid = '3eb0351f-ca78-420a-8695-f804e55b52b3';

DELETE FROM "public".property_table WHERE object_uuid = 'ea810ab7-f193-4efd-9427-1fbefa124359';
DELETE FROM "public".property_value WHERE property_uuid = 'ea810ab7-f193-4efd-9427-1fbefa124359';

DELETE FROM "public".property_table WHERE object_uuid = '34d49b49-a085-4a6b-b440-ea449d87b864';
DELETE FROM "public".property_value WHERE property_uuid = '34d49b49-a085-4a6b-b440-ea449d87b864';

DELETE FROM "public".property_table WHERE object_uuid = '5d805696-704e-421e-9874-151a1e6341da';
DELETE FROM "public".property_value WHERE property_uuid = '5d805696-704e-421e-9874-151a1e6341da';

DELETE FROM "public".property_table WHERE object_uuid = '095bafa7-d817-4ba3-981c-4b9f2b7afe0f';
DELETE FROM "public".property_value WHERE property_uuid = '095bafa7-d817-4ba3-981c-4b9f2b7afe0f';

DELETE FROM "public".property_table WHERE object_uuid = 'f8f8267f-35de-4bdb-9e0d-f06c81f169de';
DELETE FROM "public".property_value WHERE property_uuid = 'f8f8267f-35de-4bdb-9e0d-f06c81f169de';

DELETE FROM "public".property_table WHERE object_uuid = '927f0a6a-4492-431d-b131-f79391dccd26';
DELETE FROM "public".property_value WHERE property_uuid = '927f0a6a-4492-431d-b131-f79391dccd26';

DELETE FROM "public".property_table WHERE object_uuid = 'ac9e3c99-77c1-4825-8188-8943f7d4b040';
DELETE FROM "public".property_value WHERE property_uuid = 'ac9e3c99-77c1-4825-8188-8943f7d4b040';

DELETE FROM "public".property_table WHERE object_uuid = 'a9379ad8-3bb7-4cbf-b290-49a0ff0d9f7f';
DELETE FROM "public".property_value WHERE property_uuid = 'a9379ad8-3bb7-4cbf-b290-49a0ff0d9f7f';

DELETE FROM "public".property_table WHERE object_uuid = '341ddc6c-2510-44c8-85a0-e0f3b55d6e64';
DELETE FROM "public".property_value WHERE property_uuid = '341ddc6c-2510-44c8-85a0-e0f3b55d6e64';

DELETE FROM "public".property_table WHERE object_uuid = 'ef25754d-0cba-4a94-858b-92b80d920254';
DELETE FROM "public".property_value WHERE property_uuid = 'ef25754d-0cba-4a94-858b-92b80d920254';

DELETE FROM "public".property_table WHERE object_uuid = 'cae398b8-f382-42d2-8f63-b0bdfd660c9a';
DELETE FROM "public".property_value WHERE property_uuid = 'cae398b8-f382-42d2-8f63-b0bdfd660c9a';

DELETE FROM "public".property_table WHERE object_uuid = '89226b95-09ab-4e3e-a0a1-65f6ca0633f1';
DELETE FROM "public".property_value WHERE property_uuid = '89226b95-09ab-4e3e-a0a1-65f6ca0633f1';

DELETE FROM "public".property_table WHERE object_uuid = '489e2a6b-942a-4a65-9a9c-7f7fdcef3ff5';
DELETE FROM "public".property_value WHERE property_uuid = '489e2a6b-942a-4a65-9a9c-7f7fdcef3ff5';

DELETE FROM "public".property_table WHERE object_uuid = '3470764e-9a9e-4fda-8263-f78803930cd7';
DELETE FROM "public".property_value WHERE property_uuid = '3470764e-9a9e-4fda-8263-f78803930cd7';


DELETE FROM "public".property_table WHERE object_uuid = 'acf2988f-36dd-41a7-a9b4-ff090ccbb578';

UPDATE "public".property_table SET (property_required)=(false) WHERE object_uuid ='9417f35d-93fb-42b6-bd05-54b2e2b0553c';
UPDATE "public".property_table SET (property_required)=(false) WHERE object_uuid ='a9204bd9-e9ea-4ae5-bd96-d1a3093e6a32';


UPDATE "public".property_table  SET (is_editable, property_required) = (false, false) WHERE  object_uuid = '76ccd760-d606-4eba-875c-5476b0354555';
UPDATE "public".property_table  SET (is_editable, property_required) = (false, false) WHERE  object_uuid = 'a007f130-dc13-4717-a7a9-bb7de86713d2';
UPDATE "public".property_table  SET (is_editable, property_required) = (false, false) WHERE  object_uuid = '0b01362b-d540-4ec7-97d5-0792820c057f';

UPDATE "public".property_table  SET (property_default_value, is_editable, property_required) = ('sex',false, false) WHERE  object_uuid = '3cec1921-1d6f-4a60-a312-5905fc77a590';

UPDATE "public".property_table  SET (is_editable, property_required) = (false, false) WHERE  object_uuid = 'ef61eba6-ac5d-4663-8164-242029bfb8ce';

UPDATE "public".property_table  SET (is_editable, property_required, property_order)= (false, false, 8) WHERE object_uuid = '3c888f4c-d483-4099-a044-8f37ab040202';


DELETE FROM "public".property_table WHERE object_uuid = '8eaf68f5-a42d-4dc6-bca5-dbeb0db46633';

INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order,
                                    property_id
                                    )VALUES(
                                            'a575d1c5-5f1a-4b96-b39d-6790d4e285af',
                                            'c8a7bea9-e770-499e-9a6c-63f103a58d2e',
                                            '',
                                            'FORM',
                                            false,
                                            false,
                                            '',
                                            47,
                                            'passport'
                                            );


UPDATE "public".property_table  SET (property_order, group_uuid) = (0, 'a575d1c5-5f1a-4b96-b39d-6790d4e285af') WHERE object_uuid = 'e925de1a-9467-44ef-9a3f-f84ffad02aaa';
UPDATE "public".property_table  SET (property_order, group_uuid) = (5, 'a575d1c5-5f1a-4b96-b39d-6790d4e285af') WHERE object_uuid = '7808cc0e-f6d3-4ec4-bac1-7dcee02e4dd9';
UPDATE "public".property_table  SET (property_order, group_uuid) = (10, 'a575d1c5-5f1a-4b96-b39d-6790d4e285af') WHERE object_uuid = '88cd529d-a094-4110-903d-1b4fa25231a9';
UPDATE "public".property_table  SET (property_order, group_uuid) = (15, 'a575d1c5-5f1a-4b96-b39d-6790d4e285af') WHERE object_uuid = '26b4858e-d0be-45d3-838f-718bb2d50f60';

UPDATE "public".property_table  SET (property_required) = (false) WHERE object_uuid = 'e925de1a-9467-44ef-9a3f-f84ffad02aaa';
UPDATE "public".property_table  SET (property_required) = (false) WHERE object_uuid = '7808cc0e-f6d3-4ec4-bac1-7dcee02e4dd9';


UPDATE "public".property_table  SET (property_order) = (4) WHERE object_uuid = '3cec1921-1d6f-4a60-a312-5905fc77a590';
UPDATE "public".property_table  SET (property_order) = (5) WHERE object_uuid = 'ef61eba6-ac5d-4663-8164-242029bfb8ce';
UPDATE "public".property_table  SET (property_order) = (6) WHERE object_uuid = '3c888f4c-d483-4099-a044-8f37ab040202';

DELETE FROM "public".property_table WHERE object_uuid = '983e1c9b-7c79-43cd-85b8-0a7d360241f8';
DELETE FROM "public".property_value WHERE property_uuid = '983e1c9b-7c79-43cd-85b8-0a7d360241f8';

DELETE FROM "public".property_table WHERE object_uuid = '902bbfc2-cfff-45a9-aa64-2ec98162276a';
DELETE FROM "public".property_value WHERE property_uuid = '902bbfc2-cfff-45a9-aa64-2ec98162276a';

UPDATE "public".property_table  SET (property_id) = ('maiden_name') WHERE object_uuid = 'e1dcf6db-918b-4f97-9baf-87d560af2732';


UPDATE "public".property_table  SET (property_name, property_order) = ('Контактні дані',40) WHERE object_uuid = 'c0cd0e09-ca42-44e1-9526-3a1108c65f1e';
UPDATE "public".property_table  SET (property_order) = (48) WHERE object_uuid = 'a575d1c5-5f1a-4b96-b39d-6790d4e285af';

INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            'f43551be-2355-41e9-84fd-aae251b6e3e0',
                                            'c8a7bea9-e770-499e-9a6c-63f103a58d2e',
                                            'Паспортні дані',
                                            'LABEL2',
                                            false,
                                            false,
                                            '',
                                            47
                                            );

DELETE FROM "public".property_table WHERE object_uuid = 'eb5738ab-7a02-4eb8-9062-9df5be8d9c37';
DELETE FROM "public".property_table WHERE object_uuid = '4466bc08-65ec-4f20-8962-ee4aab0f4842';
DELETE FROM "public".property_table WHERE object_uuid = 'f11be4bb-87e4-47fd-ba65-ae70d3df6588';

INSERT INTO "public".property_attributes (
                                            object_uuid,
                                            is_multi_fields,
                                            max_fields_count
                                            )VALUES(
                                                    '1dad37d3-e063-48c0-b495-55fb4d469a0a',
                                                    true,
                                                    3
                                                    );

UPDATE "public".property_table SET (attributes_uuid)=('1dad37d3-e063-48c0-b495-55fb4d469a0a') WHERE object_uuid = '9b9e979b-6447-4d7f-908a-4094110837db';


DELETE FROM "public".property_table WHERE object_uuid = '028b3a78-0ed0-45d9-a08c-77beacc89b11';

UPDATE "public".property_table  SET (property_required) = (false) WHERE object_uuid = 'df3ca265-07e7-4179-845a-b0bd712194b3';
UPDATE "public".property_table  SET (property_notation) = ('(цифрами) якщо немає "0"') WHERE object_uuid = 'b092ba79-f7b2-4971-beef-76772bf8a76d';
UPDATE "public".property_table  SET (property_name) = ('№ офіса') WHERE object_uuid = 'cdc3efbd-1f39-4735-a963-06bdfffe7c74';

INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '1dba3c6c-afdb-43ec-8a32-8e411ffee05a',
                                            'b534ddc9-054e-42a2-badb-0d750b3a594f',
                                            'район',
                                            'TEXT',
                                            true,
                                            true,
                                            '',
                                            22
                                            );

DELETE FROM "public".property_table WHERE object_uuid = 'd1c7b17f-a35f-474c-a921-345417e851f7';
DELETE FROM "public".property_table WHERE object_uuid = 'b6cc1767-0c5a-4f75-8123-b58f9b4bba97';
DELETE FROM "public".property_value WHERE property_uuid = 'b6cc1767-0c5a-4f75-8123-b58f9b4bba97';

DELETE FROM "public".property_table WHERE object_uuid = '6adfe7a8-f875-493d-8b3c-18a7c34445ac';
DELETE FROM "public".property_value WHERE property_uuid = '6adfe7a8-f875-493d-8b3c-18a7c34445ac';

DELETE FROM "public".property_table WHERE object_uuid = 'bc0ce136-112d-4914-b89a-45b5eaf5b673';
DELETE FROM "public".property_value WHERE property_uuid = 'bc0ce136-112d-4914-b89a-45b5eaf5b673';

DELETE FROM "public".property_table WHERE object_uuid = '3a2b9be4-66f8-4794-a810-d7c5b881471b';
DELETE FROM "public".property_value WHERE property_uuid = '3a2b9be4-66f8-4794-a810-d7c5b881471b';



INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '53839d87-527d-4678-8146-b6e7356261ac',
                                            'b534ddc9-054e-42a2-badb-0d750b3a594f',
                                            'Робочий телефон',
                                            'TEXT',
                                            true,
                                            true,
                                            'формат +380xxxxxxxxx',
                                            11
                                            );

DELETE FROM "public".property_table WHERE object_uuid = 'ed51b317-4d04-43b2-ae81-ec771afd456f';
DELETE FROM "public".property_table WHERE object_uuid = 'a835c759-d4d4-4f45-8fa7-6416e6d2b82f';
DELETE FROM "public".property_table WHERE object_uuid = '38632c27-4b02-43cd-96aa-1bd72b2cae3e';
DELETE FROM "public".property_table WHERE object_uuid = 'f6aecce3-18d0-4f1c-aee3-00fc62be0b19';

INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '4ae86b5e-b81a-4949-a1d7-b7160c9ca5da',
                                            'b534ddc9-054e-42a2-badb-0d750b3a594f',
                                            'Телефон організайії',
                                            'TEXT',
                                            true,
                                            true,
                                            'формат +380xxxxxxxxx',
                                            26
                                            );

INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'b534ddc9-054e-42a2-badb-0d750b3a594f',
                                            'Місце роботи за тематикою програми (якщо відрізняється від основного)',
                                            'FORM',
                                            false,
                                            false,
                                            'У випадку, якщо подаєте анкету за програмою, яка співвідноситься з вашою громадською або професійною діяльністю',
                                            30
                                            );

UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 0) WHERE object_uuid = '1807f601-c216-4318-96df-52635d98cd6d';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 10) WHERE object_uuid = 'ff16fd7a-9416-4eea-b6e4-67ebfe0a9982';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 20) WHERE object_uuid = '344e442a-14a3-4fb0-a57d-b35504292355';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 30) WHERE object_uuid = '67821732-8ccb-41e4-a53c-44588fb810e1';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 40) WHERE object_uuid = '9649ba41-bd65-49dd-b4be-70737226e7d7';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 50) WHERE object_uuid = '63bbf109-8063-4784-b76f-029b54f35df0';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855', 60) WHERE object_uuid = '53be9bf5-6877-44dc-af57-2a2fcafab089';
UPDATE "public".property_table  SET (group_uuid, property_order, property_name) = ('87375088-d700-4db3-8db3-010a6e6e9855', 70, 'Керівник') WHERE object_uuid = '54a13ef8-7716-434e-a101-141b6bd9015d';
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '68b4c976-8623-402b-b41f-4d00ff3d59b1',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'Прізвище',
                                            'TEXT',
                                            false,
                                            true,
                                            '',
                                            80
                                            );
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            'eaff6c3c-ac1f-4449-b2a7-2461e8e9cf51',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'Ім’я',
                                            'TEXT',
                                            false,
                                            true,
                                            '',
                                            90
                                            );
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '5796c455-537d-478e-9922-0b44c99c8365',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'По батькові',
                                            'TEXT',
                                            false,
                                            true,
                                            '',
                                            100
                                            );
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '51d5dee7-03fe-4dfd-b800-616fb257e293',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'Посада',
                                            'TEXT',
                                            false,
                                            true,
                                            '',
                                            110
                                            );
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order,
                                    attributes_uuid
                                    )VALUES(
                                            '7e84a3ac-1c50-48ba-8f8e-119457501446',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'Електронна адреса',
                                            'TEXT',
                                            false,
                                            true,
                                            '',
                                            120,
                                            'ea773831-a5c0-46cc-ab11-039b28c331d9'
                                            );
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order,
                                    attributes_uuid
                                    )VALUES(
                                            '871809e6-d516-4c4a-a76a-434c614e5cc4',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            'Робочий телефон',
                                            'TEXT',
                                            false,
                                            true,
                                            '',
                                            130,
                                            '9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c'
                                            );
INSERT INTO "public".property_table (
                                    object_uuid,
                                    group_uuid,
                                    property_name,
                                    property_type,
                                    property_required,
                                    is_editable,
                                    property_notation,
                                    property_order
                                    )VALUES(
                                            '5b84a83f-e7d5-43c0-adf6-23470a9ea136',
                                            '87375088-d700-4db3-8db3-010a6e6e9855',
                                            '',
                                            'LABEL2',
                                            false,
                                            false,
                                            '',
                                            140
                                            );
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',150) WHERE object_uuid = '4aa8e010-2b4e-4dbb-9856-adb8dda340fe';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',160) WHERE object_uuid = '25a5d799-c464-4180-8a1f-0d5ecdbc3f9e';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',170) WHERE object_uuid = '640c36ce-2a7b-45f5-82f1-aae4f944b8c8';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',180) WHERE object_uuid = '1b0672cd-7d08-43da-9612-248d258b760a';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',190) WHERE object_uuid = 'f07ee46c-a858-41df-b921-a3381d4d493f';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',200) WHERE object_uuid = 'b4055c21-eae4-46d2-ad8b-3e5e6c6ffd19';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',210) WHERE object_uuid = '8e56c815-7b65-4dc1-9e83-b81a65ba015d';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',220) WHERE object_uuid = '4504fca6-9b2d-4d73-9f7b-c776cbf5569b';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',230) WHERE object_uuid = 'f7d7a6df-4c9b-4a32-9466-cb6594811bbe';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',240) WHERE object_uuid = 'f22a1422-62db-4c0f-94c3-ccc63aedbf41';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',250) WHERE object_uuid = 'c48622f5-c75b-4a1c-9695-4d754f46f0d6';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',260) WHERE object_uuid = '14c22000-eb82-4cb8-b744-e77271b90920';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',270) WHERE object_uuid = '2661821c-7bb1-4ede-824e-7b1cb7700d3d';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',280) WHERE object_uuid = '9bc58d3c-de21-4c59-9074-7dc9e5c0ba8b';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',290) WHERE object_uuid = '2213bf46-4105-426d-9c9d-1a04b2ed3405';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',300) WHERE object_uuid = '296bb038-548b-4211-9d93-1eb104744995';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',310) WHERE object_uuid = '2e905177-3d33-4c8e-819e-7178cb0f9715';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',320) WHERE object_uuid = '14a5515c-611b-4e16-8bf0-7dd632eaebc0';
UPDATE "public".property_table  SET (group_uuid, property_order) = ('87375088-d700-4db3-8db3-010a6e6e9855',330) WHERE object_uuid = '605bd86d-fbdb-439b-bda0-22f212af83cb';


INSERT INTO "public".property_attributes(
                                        object_uuid,
                                        is_multi_fields,
                                        max_fields_count
                                        )VALUES(
                                                '9699ab02-6d8c-4aff-98ee-396898875865',
                                                true,
                                                2
                                                );

UPDATE "public".property_table  SET (attributes_uuid) = ('9699ab02-6d8c-4aff-98ee-396898875865') WHERE object_uuid = '4cf4da4c-7396-4874-9ab7-d6827ad1ecad';


UPDATE "public".property_table  SET (property_id) = ('passport_check') WHERE object_uuid = 'c7141ac8-b397-4c6a-b715-d6ef4cf8fa07';

ALTER TABLE property_table ADD COLUMN java_script TEXT;

UPDATE "public".property_table  SET (java_script) = ('<script><!--

                    var checkPasport = function() {
                        if ($j(".checkbox_passport_check input:checked").val() == "true")
                        {
                            $j(".property_passport").css("display", "block");
                        } else
                        {
                            $j(".property_passport").css("display", "none");
                        }
                    };
                    $j(".checkbox_passport_check input[type=radio]").on("click", function() {
                        checkPasport();
                    });
                    $j(document).ready(function(){
                        checkPasport();
                    })

//--></script>') WHERE object_uuid = 'c7141ac8-b397-4c6a-b715-d6ef4cf8fa07';

UPDATE "public".property_table  SET (property_id) = ('sex') WHERE object_uuid = '3cec1921-1d6f-4a60-a312-5905fc77a590';

UPDATE "public".property_table  SET (java_script) = ('<script><!--

                    var checkSex = function() {
                        if ($j(".select_text_sex option:selected").val() == "Жіноча")
                        {
                            $j(".text_maiden_name").css("display", "block");
                        } else
                        {
                            $j(".text_maiden_name").css("display", "none");
                        }
                    };
                    $j(".select_text_sex select").change(function() {
                        checkSex();
                    }).trigger( "change" );;
                    $j(document).ready(function(){
                        checkSex();
                    })

//--></script>') WHERE object_uuid = '3cec1921-1d6f-4a60-a312-5905fc77a590';

UPDATE "public".property_table  SET (property_id) = ('family_status') WHERE object_uuid = 'f0fbcaf3-bf35-4332-a9e7-0af368f5e6b5';
UPDATE "public".property_table  SET (property_id) = ('partner_fio') WHERE object_uuid = 'ed4fba56-b7c0-43e7-8aef-96d77dd60333';



UPDATE "public".property_table  SET (java_script) = ('<script><!--

                    var checkFamilyStatus = function() {
                        if ($j(".select_text_family_status option:selected").val() != "неодружений/незаміжня ")
                        {
                            if ( $j(".text_partner_fio").hasClass("required") == false) {
                                $j(".text_partner_fio").addClass("required");
                                $j(".buttom_text_partner_fio_true").click();
                            }
                            $j(".text_partner_fio").css("display", "block");

                        } else
                        {
                            if ( $j(".text_partner_fio").hasClass("required") == true) {
                                $j(".text_partner_fio").removeClass("required");
                                $j(".buttom_text_partner_fio_false").click();
                            }
                            $j(".text_partner_fio").css("display", "none");
                        }
                    };

                    $j("select.select_text_family_status").change(function() {
                        checkFamilyStatus();
                    });

                    $j(document).ready(function(){
                       checkFamilyStatus();
                    });



//--></script>') WHERE object_uuid = 'ed4fba56-b7c0-43e7-8aef-96d77dd60333';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '8660ac10-7c1a-4fac-9da7-79b3bce51fda';
DELETE FROM "public".property_table WHERE object_uuid = '8660ac10-7c1a-4fac-9da7-79b3bce51fda';
DELETE FROM "public".property_value WHERE property_uuid = '8660ac10-7c1a-4fac-9da7-79b3bce51fda';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'b02220bb-4710-42c2-b8bf-2c35e9726f8a';
DELETE FROM "public".property_table WHERE object_uuid = 'b02220bb-4710-42c2-b8bf-2c35e9726f8a';
DELETE FROM "public".property_value WHERE property_uuid = 'b02220bb-4710-42c2-b8bf-2c35e9726f8a';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '53a9352c-fe79-4c6c-b7cc-dc82b16876e9';
DELETE FROM "public".property_table WHERE object_uuid = '53a9352c-fe79-4c6c-b7cc-dc82b16876e9';
DELETE FROM "public".property_value WHERE property_uuid = '53a9352c-fe79-4c6c-b7cc-dc82b16876e9';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'bceefa9f-1839-4e47-b2b1-5e0fc2a8823e';
DELETE FROM "public".property_table WHERE object_uuid = 'bceefa9f-1839-4e47-b2b1-5e0fc2a8823e';
DELETE FROM "public".property_value WHERE property_uuid = 'bceefa9f-1839-4e47-b2b1-5e0fc2a8823e';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'fb15abd3-142b-44d0-a26a-337edb1dca85';
DELETE FROM "public".property_table WHERE object_uuid = 'fb15abd3-142b-44d0-a26a-337edb1dca85';
DELETE FROM "public".property_value WHERE property_uuid = 'fb15abd3-142b-44d0-a26a-337edb1dca85';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'd17967b0-585f-4b4a-8d85-5a835afed573';
DELETE FROM "public".property_table WHERE object_uuid = 'd17967b0-585f-4b4a-8d85-5a835afed573';
DELETE FROM "public".property_value WHERE property_uuid = 'd17967b0-585f-4b4a-8d85-5a835afed573';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '8354e645-6f16-499e-8f05-3744417de0c6';
DELETE FROM "public".property_table WHERE object_uuid = '8354e645-6f16-499e-8f05-3744417de0c6';
DELETE FROM "public".property_value WHERE property_uuid = '8354e645-6f16-499e-8f05-3744417de0c6';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'cc768210-592e-4ef7-a42e-e31646e9da47';
DELETE FROM "public".property_table WHERE object_uuid = 'cc768210-592e-4ef7-a42e-e31646e9da47';
DELETE FROM "public".property_value WHERE property_uuid = 'cc768210-592e-4ef7-a42e-e31646e9da47';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '159676d1-bf12-418c-aec8-42c62c81464c';
DELETE FROM "public".property_table WHERE object_uuid = '159676d1-bf12-418c-aec8-42c62c81464c';
DELETE FROM "public".property_value WHERE property_uuid = '159676d1-bf12-418c-aec8-42c62c81464c';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '05fc1dea-5936-46aa-91ce-c304ce5a4125';
DELETE FROM "public".property_table WHERE object_uuid = '05fc1dea-5936-46aa-91ce-c304ce5a4125';
DELETE FROM "public".property_value WHERE property_uuid = '05fc1dea-5936-46aa-91ce-c304ce5a4125';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '54ac6daa-7a50-4d1a-a002-2e2b9d086407';
DELETE FROM "public".property_table WHERE object_uuid = '54ac6daa-7a50-4d1a-a002-2e2b9d086407';
DELETE FROM "public".property_value WHERE property_uuid = '54ac6daa-7a50-4d1a-a002-2e2b9d086407';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '66dcce39-e999-4ab9-9773-c931b2e23d42';
DELETE FROM "public".property_table WHERE object_uuid = '66dcce39-e999-4ab9-9773-c931b2e23d42';
DELETE FROM "public".property_value WHERE property_uuid = '66dcce39-e999-4ab9-9773-c931b2e23d42';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'e10993c4-b8cd-4510-8536-0828128ad5cd';
DELETE FROM "public".property_table WHERE object_uuid = 'e10993c4-b8cd-4510-8536-0828128ad5cd';
DELETE FROM "public".property_value WHERE property_uuid = 'e10993c4-b8cd-4510-8536-0828128ad5cd';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'f54d1723-ea40-4cb6-851e-74c8c5becde5';
DELETE FROM "public".property_table WHERE object_uuid = 'f54d1723-ea40-4cb6-851e-74c8c5becde5';
DELETE FROM "public".property_value WHERE property_uuid = 'f54d1723-ea40-4cb6-851e-74c8c5becde5';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'dcc4d790-f03a-443e-9c0d-6b11499c17c3';
DELETE FROM "public".property_table WHERE object_uuid = 'dcc4d790-f03a-443e-9c0d-6b11499c17c3';
DELETE FROM "public".property_value WHERE property_uuid = 'dcc4d790-f03a-443e-9c0d-6b11499c17c3';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'c4d7e143-4d43-44c2-8c04-bcc78e69bc66';
DELETE FROM "public".property_table WHERE object_uuid = 'c4d7e143-4d43-44c2-8c04-bcc78e69bc66';
DELETE FROM "public".property_value WHERE property_uuid = 'c4d7e143-4d43-44c2-8c04-bcc78e69bc66';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '7084532e-549f-47b2-aa75-f57fd4cb9247';
DELETE FROM "public".property_table WHERE object_uuid = '7084532e-549f-47b2-aa75-f57fd4cb9247';
DELETE FROM "public".property_value WHERE property_uuid = '7084532e-549f-47b2-aa75-f57fd4cb9247';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'a8821b95-27a8-4ff7-83a6-1396dc881d9a';
DELETE FROM "public".property_table WHERE object_uuid = 'a8821b95-27a8-4ff7-83a6-1396dc881d9a';
DELETE FROM "public".property_value WHERE property_uuid = 'a8821b95-27a8-4ff7-83a6-1396dc881d9a';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '979a89a6-3f90-4b28-9ce0-2815eaef609d';
DELETE FROM "public".property_table WHERE object_uuid = '979a89a6-3f90-4b28-9ce0-2815eaef609d';
DELETE FROM "public".property_value WHERE property_uuid = '979a89a6-3f90-4b28-9ce0-2815eaef609d';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'a62deb27-db07-4eac-ac42-f02a13d58ce3';
DELETE FROM "public".property_table WHERE object_uuid = 'a62deb27-db07-4eac-ac42-f02a13d58ce3';
DELETE FROM "public".property_value WHERE property_uuid = 'a62deb27-db07-4eac-ac42-f02a13d58ce3';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'eb27cf02-7a41-4215-b3ab-dd285002c009';
DELETE FROM "public".property_table WHERE object_uuid = 'eb27cf02-7a41-4215-b3ab-dd285002c009';
DELETE FROM "public".property_value WHERE property_uuid = 'eb27cf02-7a41-4215-b3ab-dd285002c009';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'fdc89ca9-8bd7-4a8b-ae99-2eceaf4531bb';
DELETE FROM "public".property_table WHERE object_uuid = 'fdc89ca9-8bd7-4a8b-ae99-2eceaf4531bb';
DELETE FROM "public".property_value WHERE property_uuid = 'fdc89ca9-8bd7-4a8b-ae99-2eceaf4531bb';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '11fc06d1-7a53-483b-b6ef-dc115222717e';
DELETE FROM "public".property_table WHERE object_uuid = '11fc06d1-7a53-483b-b6ef-dc115222717e';
DELETE FROM "public".property_value WHERE property_uuid = '11fc06d1-7a53-483b-b6ef-dc115222717e';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = '714f78da-6528-4f22-9d2d-65326499f1e4';
DELETE FROM "public".property_table WHERE object_uuid = '714f78da-6528-4f22-9d2d-65326499f1e4';
DELETE FROM "public".property_value WHERE property_uuid = '714f78da-6528-4f22-9d2d-65326499f1e4';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'e979f85b-2aaf-4035-9a0c-a14217ad5ebe';
DELETE FROM "public".property_table WHERE object_uuid = 'e979f85b-2aaf-4035-9a0c-a14217ad5ebe';
DELETE FROM "public".property_value WHERE property_uuid = 'e979f85b-2aaf-4035-9a0c-a14217ad5ebe';

DELETE FROM "public".property__property_select_variant_ref WHERE property_uuid = 'a5a78a86-1fc8-471d-bc0b-3f7a2bd528df';
DELETE FROM "public".property_table WHERE object_uuid = 'a5a78a86-1fc8-471d-bc0b-3f7a2bd528df';
DELETE FROM "public".property_value WHERE property_uuid = 'a5a78a86-1fc8-471d-bc0b-3f7a2bd528df';

DELETE FROM "public".property_table WHERE object_uuid = 'd59e63a8-52db-4f7e-991e-cfe789811e73';

DELETE FROM "public".property_table WHERE object_uuid = 'c62f70b4-61ab-4e60-9574-0b2569476252';

ALTER TABLE USER_TABLE ADD COLUMN user_sex TEXT;

-----------------------------------------------------------------------------------

INSERT INTO "public".property_attributes (object_uuid,
date_type)VALUES('453a762a-6b36-4f36-ac46-3b00b1f47fe2',
'noDay');

UPDATE "public".property_table SET(attributes_uuid)=('453a762a-6b36-4f36-ac46-3b00b1f47fe2') WHERE object_uuid = 'f57a2fbe-908b-4a9c-be91-14bfaaa5da2e';
UPDATE "public".property_table SET(attributes_uuid)=('453a762a-6b36-4f36-ac46-3b00b1f47fe2') WHERE object_uuid = '97375997-0a2a-4eac-91ad-ae98567ed8bf';
UPDATE "public".property_table SET(attributes_uuid)=('453a762a-6b36-4f36-ac46-3b00b1f47fe2') WHERE object_uuid = 'ab7ecf3f-8ba9-4180-9ad8-518325c35517';
UPDATE "public".property_table SET(attributes_uuid)=('453a762a-6b36-4f36-ac46-3b00b1f47fe2') WHERE object_uuid = 'ff27b45b-9a73-40cd-8073-07c61b6806c1';
UPDATE "public".property_table SET(attributes_uuid)=('453a762a-6b36-4f36-ac46-3b00b1f47fe2') WHERE object_uuid = '1b0672cd-7d08-43da-9612-248d258b760a';

UPDATE "public".property_table SET (property_name)=('Прізвище, ім’я та по батькові дітей, стать, рік народження (якщо маєте)') WHERE object_uuid = '56d2001b-18c1-4df2-abfb-f0dba6e106f4';
UPDATE "public".property_table SET(property_order)=(17) WHERE object_uuid = 'e1dcf6db-918b-4f97-9baf-87d560af2732';
UPDATE "public".property_table SET(property_order)=(16) WHERE object_uuid = 'f0fbcaf3-bf35-4332-a9e7-0af368f5e6b5';
UPDATE "public".property_table SET(property_order)=(47) WHERE object_uuid = 'c7141ac8-b397-4c6a-b715-d6ef4cf8fa07';
UPDATE "public".property_table SET(property_order)=(46) WHERE object_uuid = 'f43551be-2355-41e9-84fd-aae251b6e3e0';

UPDATE "public".property_table SET (property_id)=('invalid_info') WHERE object_uuid = '67c08533-f05b-49ff-bec3-4ef55aa7d54b';
UPDATE "public".property_table SET (property_id, java_script)=('check_invalid_info',
'<script><!--
            var checkInvalid = function() {
                   if ($j(".checkbox_check_invalid_info input:checked").val() == "true")
                {
   $j(".text_invalid_info").css("display", "block");
                   } else
         {
   $j(".text_invalid_info").css("display", "none");
            }                     };
             $j(".checkbox_check_invalid_info input[type=radio]").on("click", function() {
                     checkInvalid();
     });
 $j(document).ready(function(){
              checkInvalid();
        })  //--></script>') WHERE object_uuid = '488fa7d0-ff21-47cd-82c2-3aa9eb441f29';





UPDATE "public".property_table SET (property_id)=('program_work_form') WHERE object_uuid = '87375088-d700-4db3-8db3-010a6e6e9855';

INSERT INTO "public".property_table (
object_uuid,
group_uuid,
property_name,
property_type,
property_required,
is_editable,
property_default_value,
property_notation,
property_order,
property_id,
java_script) VALUES (
'6562e7e7-b17f-4013-b75b-f4895dd06c17',
'b534ddc9-054e-42a2-badb-0d750b3a594f',
'Чи маєте ви роботу яка відрізняєтся від основного але відповідає тематиці программи',
'CHECKBOX',
false,
true,
null,
null,
28,
'check_program_work',
'<script><!--

                    var checkProgramWorck = function() {
                        if ($j(".checkbox_check_program_work input:checked").val() == "true")
                        {
                            $j(".property_program_work_form").css("display", "block");
                        } else
                        {
                            $j(".property_program_work_form").css("display", "none");
                        }
                    };
                    $j(".checkbox_check_program_work input[type=radio]").on("click", function() {
                        checkProgramWorck();
                    });
                    $j(document).ready(function(){
                        checkProgramWorck();
                    })

//--></script>');


UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '69c0dec3-1811-4862-80e7-c957896e30fc';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '0469825d-ee63-4b55-a74a-e86c7921d7dc';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = 'b408fd1f-c303-4d67-8696-0d6696f04d8e';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '0883a65b-f0d5-42ff-9774-8a826f05cc92';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '9eaeec86-bae8-47bf-a30f-2b7af3a86775';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '22f644b0-2e8e-4e6e-9232-edbada0b6118';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = 'c7ccbfde-ead8-4cec-bf65-c998a2aa59fe';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '5c82757d-de3b-4389-ac5f-bcaa3b2369b8';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = 'ab61a7b3-dbda-4d93-9abd-4c2edc2a7921';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = '65647d49-6f88-40a5-a879-e407b1448cca';
UPDATE "public".property_table SET (property_type)=('CHECKBOXSINGLE') WHERE object_uuid = 'a6d40e34-72ad-4ae1-b1d6-c4b4933cbd74';


UPDATE "public".property_select_variant_table SET (object_order)=(0) WHERE object_uuid = '661af2b7-5f91-437f-805f-d780bf242e3c';
UPDATE "public".property_select_variant_table SET (object_order)=(1) WHERE object_uuid = '178bd833-755c-46e6-a7c3-3e0af1f24846';

UPDATE "public".property_select_variant_table SET (variant_value)=('Україна') WHERE object_uuid = 'fa21f625-b059-476e-ba8f-942f529e77b2';
UPDATE "public".property_select_variant_table SET (variant_value)=('Вінницька обл.') WHERE object_uuid = 'd9bd7f32-a816-477f-a7d1-f15ae5a1c0d5';
UPDATE "public".property_select_variant_table SET (variant_value)=('Волинська обл.') WHERE object_uuid = '6509baa3-3599-4269-8b6d-e66da1088bda';
UPDATE "public".property_select_variant_table SET (variant_value)=('Дніпропетровська обл.') WHERE object_uuid = 'c920fb07-1240-4e29-95ad-c0b85fc7b01c';
UPDATE "public".property_select_variant_table SET (variant_value)=('Донецька обл.') WHERE object_uuid = 'a403f6f2-e48d-43c9-89f4-a5cb19d8b712';
UPDATE "public".property_select_variant_table SET (variant_value)=('Житомирська обл.') WHERE object_uuid = '928fa856-e3f3-4dd9-a368-dbfbe33e776d';
UPDATE "public".property_select_variant_table SET (variant_value)=('Закарпатська обл.') WHERE object_uuid = 'd75bc10b-bb36-4c5d-89d3-8833f21b7685';
UPDATE "public".property_select_variant_table SET (variant_value)=('Запоріжська обл.') WHERE object_uuid = '4f5a7533-db5a-4414-a731-b6a238615308';
UPDATE "public".property_select_variant_table SET (variant_value)=('Івано-Франківська обл.') WHERE object_uuid = '17f169db-4c09-4f41-89c8-1a850ade83f2';
UPDATE "public".property_select_variant_table SET (variant_value)=('Київська обл.') WHERE object_uuid = 'eb164d13-f74a-449e-a348-dc8b323ddf2c';
UPDATE "public".property_select_variant_table SET (variant_value)=('Кіровоградська обл.') WHERE object_uuid = '640f58ca-ff49-4513-82d2-a3a47f82eb29';
UPDATE "public".property_select_variant_table SET (variant_value)=('Кримська обл.') WHERE object_uuid = 'fdd385df-1589-4e31-ad1e-40710c72b0f4';
UPDATE "public".property_select_variant_table SET (variant_value)=('Луганська обл.') WHERE object_uuid = '21f54d32-977d-4ff4-9562-ae5ca76b4579';
UPDATE "public".property_select_variant_table SET (variant_value)=('Львівська обл.') WHERE object_uuid = '08be557b-a668-45fe-8100-d4cc636669fa';
UPDATE "public".property_select_variant_table SET (variant_value)=('Миколаївська обл.') WHERE object_uuid = '1bc9b89c-4e2e-4f4f-9055-0654b92520b5';
UPDATE "public".property_select_variant_table SET (variant_value)=('Одесська обл.') WHERE object_uuid = '35f1fdba-1bc2-4ce8-aa18-3a92d87c2ce4';
UPDATE "public".property_select_variant_table SET (variant_value)=('Полтавська обл.') WHERE object_uuid = '6b850a8d-63a1-44a8-9219-0ff8a4d97255';
UPDATE "public".property_select_variant_table SET (variant_value)=('Рівненська обл.') WHERE object_uuid = '81738fbf-c178-4839-82be-4748a68127ae';
UPDATE "public".property_select_variant_table SET (variant_value)=('Сумська обл.') WHERE object_uuid = 'add44968-fc11-48d8-9f41-41dfa5324b41';
UPDATE "public".property_select_variant_table SET (variant_value)=('Тернопільська обл.') WHERE object_uuid = '00d2302d-064b-472c-9a16-f67a1bed4c14';
UPDATE "public".property_select_variant_table SET (variant_value)=('Україна') WHERE object_uuid = 'd1583e00-c422-4e30-a466-ee145da781dd';
UPDATE "public".property_select_variant_table SET (variant_value)=('Харківська обл.') WHERE object_uuid = '522c7f53-8a3d-4d46-8bf2-f02434bde010';
UPDATE "public".property_select_variant_table SET (variant_value)=('Херсонська обл.') WHERE object_uuid = 'c0298ce9-0e4f-46ea-8b82-707d341a8737';
UPDATE "public".property_select_variant_table SET (variant_value)=('Хмельницька обл.') WHERE object_uuid = '0cd86071-f7b3-4ae4-86af-13fb3967e2da';
UPDATE "public".property_select_variant_table SET (variant_value)=('Черкасська обл.') WHERE object_uuid = '32baae3b-4bd8-457c-9ede-f94bfbf8046c';
UPDATE "public".property_select_variant_table SET (variant_value)=('Чернігівська обл.') WHERE object_uuid = 'e3d0afd7-0b9b-44cc-99c0-d03038b4771d';
UPDATE "public".property_select_variant_table SET (variant_value)=('Чернівецька обл.') WHERE object_uuid = '64c36ac6-f600-4570-91d4-6cb38b519932';


DELETE FROM "public".user_program_ref ;
DELETE FROM "public".property_value;