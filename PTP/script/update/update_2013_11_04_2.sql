-- INSERT INTO "public".property_attributes (object_uuid, max_length_active, max_length, min_length_active, min_length, fix_length_active, fix_length, date_type, data_format, is_multi_fields, max_fields_count, layout_form_fields)
-- 	VALUES ('5cbdfb80-4558-11e3-8f96-0800200c9a66', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL, NULL, DEFAULT, DEFAULT, NULL);
-- INSERT INTO "public".property_attributes (object_uuid, max_length_active, max_length, min_length_active, min_length, fix_length_active, fix_length, date_type, data_format, is_multi_fields, max_fields_count, layout_form_fields)
-- 	VALUES ('e7c53b50-455b-11e3-8f96-0800200c9a66', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL, NULL, DEFAULT, DEFAULT, NULL);
-- INSERT INTO "public".property_attributes (object_uuid, max_length_active, max_length, min_length_active, min_length, fix_length_active, fix_length, date_type, data_format, is_multi_fields, max_fields_count, layout_form_fields)
-- 	VALUES ('dfe683d0-4560-11e3-8f96-0800200c9a66', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL, NULL, DEFAULT, DEFAULT, NULL);
-- INSERT INTO "public".property_attributes (object_uuid, max_length_active, max_length, min_length_active, min_length, fix_length_active, fix_length, date_type, data_format, is_multi_fields, max_fields_count, layout_form_fields)
-- 	VALUES ('f0c0ac70-4561-11e3-8f96-0800200c9a66', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL, NULL, DEFAULT, DEFAULT, NULL);
-- UPDATE "public".property_attributes SET "max_length_active" = false, "data_format" = '^[0-9]*$' WHERE object_uuid = 'dfe683d0-4560-11e3-8f96-0800200c9a66';
-- UPDATE "public".property_attributes SET "is_multi_fields" = true, "max_fields_count" = 3, "data_format" = '^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$', "fix_length_active" = true, "fix_length" = 13 WHERE object_uuid = '5cbdfb80-4558-11e3-8f96-0800200c9a66';
-- UPDATE "public".property_attributes SET "data_format" = '^[_a-zA-Z][_a-zA-Z][0-9][0-9][0-9][0-9][0-9][0-9]$' WHERE object_uuid = 'e7c53b50-455b-11e3-8f96-0800200c9a66';
-- UPDATE "public".property_attributes SET "data_format" = '^[0-9][0-9]$' WHERE object_uuid = 'f0c0ac70-4561-11e3-8f96-0800200c9a66';


-- UPDATE "public".property_table SET "property_notation" = 'Заповнюється українською мовою як у ПАСПОРТІ' WHERE object_uuid = '76ccd760-d606-4eba-875c-5476b0354555';
-- UPDATE "public".property_table SET "property_notation" = 'Заповнюється українською мовою як у ПАСПОРТІ' WHERE object_uuid = 'a007f130-dc13-4717-a7a9-bb7de86713d2';
-- UPDATE "public".property_table SET "property_notation" = 'Заповнюється українською мовою як у ПАСПОРТІ' WHERE object_uuid = '0b01362b-d540-4ec7-97d5-0792820c057f';
-- UPDATE "public".property_table SET "attributes_uuid" = '5cbdfb80-4558-11e3-8f96-0800200c9a66' WHERE object_uuid = '9b9e979b-6447-4d7f-908a-4094110837db';
-- UPDATE "public".property_table SET "property_id" = '', "attributes_uuid" = 'e7c53b50-455b-11e3-8f96-0800200c9a66' WHERE object_uuid = '26b4858e-d0be-45d3-838f-718bb2d50f60';
-- UPDATE "public".property_table SET "property_id" = '', "attributes_uuid" = 'e7c53b50-455b-11e3-8f96-0800200c9a66' WHERE object_uuid = '8f2b3f5f-6d27-425f-8812-1e53892fac4a';
-- UPDATE "public".property_table SET "property_notation" = 'Будь ласка, вкажіть двох осіб в Україні, до яких ми могли б звернутись у випадку необхідності' WHERE object_uuid = 'ebbe5297-6059-4a0e-8dcf-558ad6f6dd37';
-- UPDATE "public".property_table SET "property_notation" = 'Будь ласка, вкажіть двох осіб в Україні, до яких ми могли б звернутись у випадку необхідності' WHERE object_uuid = '6043f0ef-a208-4158-b7e9-c0d8569de8e5';
-- UPDATE "public".property_table SET "attributes_uuid" = '9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c' WHERE object_uuid = '53839d87-527d-4678-8146-b6e7356261ac';
-- UPDATE "public".property_table SET "property_notation" = 'формат +380xxxxxxxxx' WHERE object_uuid = '871809e6-d516-4c4a-a76a-434c614e5cc4';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = '8aac8734-0eaa-43f8-9748-bf26ee310795';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = '4aa8e010-2b4e-4dbb-9856-adb8dda340fe';
-- UPDATE "public".property_table SET "property_notation" = 'наприклад: охорона здоров’я, благодійність тощо' WHERE object_uuid = '4d76e837-17d9-4a58-b826-158145267cd8';
-- UPDATE "public".property_table SET "property_notation" = 'наприклад: охорона здоров’я, благодійність тощо' WHERE object_uuid = '867ba5ca-25e8-4cc5-9237-27a0c0e9cf84';
-- UPDATE "public".property_table SET "property_notation" = 'наприклад: охорона здоров’я, благодійність тощо' WHERE object_uuid = '25a5d799-c464-4180-8a1f-0d5ecdbc3f9e';
-- UPDATE "public".property_table SET "property_notation" = '(цифрами) якщо немає "0"', "attributes_uuid" = 'dfe683d0-4560-11e3-8f96-0800200c9a66' WHERE object_uuid = 'f07ee46c-a858-41df-b921-a3381d4d493f';
-- UPDATE "public".property_table SET "property_notation" = '(цифрами) якщо немає "0"', "attributes_uuid" = 'dfe683d0-4560-11e3-8f96-0800200c9a66' WHERE object_uuid = 'd5bd051c-a930-4fb3-bda2-a7f12a4991c9';
-- UPDATE "public".property_table SET "property_notation" = '(цифрами) якщо немає "0"', "property_id" = '', "attributes_uuid" = 'dfe683d0-4560-11e3-8f96-0800200c9a66' WHERE object_uuid = 'eb9d5341-2405-4492-bf0e-cc83a25d5989';
-- UPDATE "public".property_table SET "property_notation" = '(цифрами) якщо немає "0"', "attributes_uuid" = 'dfe683d0-4560-11e3-8f96-0800200c9a66' WHERE object_uuid = '40ab1eeb-be10-4562-ab1b-a304ebfe4378';
-- UPDATE "public".property_table SET "property_notation" = '(цифрами) якщо немає "0"', "attributes_uuid" = 'dfe683d0-4560-11e3-8f96-0800200c9a66' WHERE object_uuid = '640c36ce-2a7b-45f5-82f1-aae4f944b8c8';
-- UPDATE "public".property_table SET "attributes_uuid" = 'dfe683d0-4560-11e3-8f96-0800200c9a66' WHERE object_uuid = 'b092ba79-f7b2-4971-beef-76772bf8a76d';
-- UPDATE "public".property_table SET "property_notation" = '2 символи (04 або 12)', "attributes_uuid" = 'f0c0ac70-4561-11e3-8f96-0800200c9a66' WHERE object_uuid = 'e08b0832-5844-4ebb-9ee4-d453a83daca9';
-- UPDATE "public".property_table SET "attributes_uuid" = 'f0c0ac70-4561-11e3-8f96-0800200c9a66' WHERE object_uuid = 'b4055c21-eae4-46d2-ad8b-3e5e6c6ffd19';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = 'f57a2fbe-908b-4a9c-be91-14bfaaa5da2e';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = '1b0672cd-7d08-43da-9612-248d258b760a';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = '97375997-0a2a-4eac-91ad-ae98567ed8bf';
-- UPDATE "public".property_table SET "property_name" = 'Телефон організації', "attributes_uuid" = '9ee8c4aa-e9c1-4ab0-a14a-0cd9d3b4f62c' WHERE object_uuid = '4ae86b5e-b81a-4949-a1d7-b7160c9ca5da';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = 'ab7ecf3f-8ba9-4180-9ad8-518325c35517';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = 'ff27b45b-9a73-40cd-8073-07c61b6806c1';
-- UPDATE "public".property_table SET "property_name" = 'Будь ласка, вкажіть нагороди або відзнаки, отримані вами під час навчання та дату їх отримання. Наприклад: диплом з відзнакою, атестат із золотою або срібною медаллю, грамоти тощо' WHERE object_uuid = '23fee607-5081-46eb-adbc-423bd0908146';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = '1bbd3592-58f0-4351-9aa7-092dc8d5624a';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = 'b1aab54f-9ca4-48d1-95f2-4ab1f58d20b2';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = 'd65bd190-fab9-4485-bb13-34d102661e8b';
-- UPDATE "public".property_table SET "property_notation" = '' WHERE object_uuid = '412ccc4e-c0a3-45c8-91d8-fedd30b505aa';

-- DELETE FROM "public".property_table WHERE object_uuid = '8e56c815-7b65-4dc1-9e83-b81a65ba015d';
-- DELETE FROM "public".property_table WHERE object_uuid = '0714aaf1-a4e9-4f40-a2a2-bab8c2f9f182';


UPDATE "public".property_table SET (property_id)=('recommend_one_surname')      WHERE object_uuid = '68e1cd55-99de-498a-a091-e8c175474896';
UPDATE "public".property_table SET (property_id)=('recommend_one_name')         WHERE object_uuid = 'a6ba03e4-c008-440e-aabe-c670b2ffd677';
UPDATE "public".property_table SET (property_id)=('recommend_one_patronymic')   WHERE object_uuid = '67679168-dd07-4f0c-a838-e3a3d00501fb';
UPDATE "public".property_table SET (property_id)=('recommend_one_workplase')    WHERE object_uuid = '5c734cf7-86d9-454c-b33e-aa4b21b990de';
UPDATE "public".property_table SET (property_id)=('recommend_one_workposition') WHERE object_uuid = '3d51d73c-d6eb-4cef-bdcd-9d74dc8329b3';
UPDATE "public".property_table SET (property_id)=('recommend_one_email')        WHERE object_uuid = 'bc90bd6b-245d-45ee-baee-8ebe39b279c3';
UPDATE "public".property_table SET (property_id)=('recommend_one_phone')        WHERE object_uuid = '602073b9-3841-4c1c-9912-8e9c4f9f61c2';

UPDATE "public".property_table SET (property_id)=('recommend_two_surname')      WHERE object_uuid = '656ee0e0-6b2c-4791-9518-4efcb6671671';
UPDATE "public".property_table SET (property_id)=('recommend_two_name')         WHERE object_uuid = 'ee3bfef5-40e4-4b74-b2f8-64fa72b5ee1d';
UPDATE "public".property_table SET (property_id)=('recommend_two_patronymic')   WHERE object_uuid = 'e319dfae-6aca-4dfc-9e35-68db64dae68f';
UPDATE "public".property_table SET (property_id)=('recommend_two_workplase')    WHERE object_uuid = '0bbe4a69-a45d-40cb-978b-4f9d7db07b1a';
UPDATE "public".property_table SET (property_id)=('recommend_two_workposition') WHERE object_uuid = '580b60e0-d3ac-409b-bb1d-8c78fb6b1072';
UPDATE "public".property_table SET (property_id)=('recommend_two_email')        WHERE object_uuid = '52c589d9-9fd0-493f-a563-f24b88eba716';
UPDATE "public".property_table SET (property_id)=('recommend_two_phone')        WHERE object_uuid = '16fbe0e7-1ab6-46b7-a401-bc5b94289890';

CREATE TABLE RECOMEND_TABLE (
object_uuid             UUID            NOT NULL,
owner_uuid              UUID            NOT NULL,
recomend_uuid           UUID            NOT NULL,
recomend                BOOLEAN         DEFAULT FALSE,
how_long_known          TEXT,
lider_potential         TEXT,
flexibility             TEXT,
motivation              TEXT,
best_quality            TEXT,
why_corresponds_program TEXT,
can_apply_knowledge     TEXT,
achievement_candidate   TEXT,
recomend_name           TEXT            NOT NULL,
recomend_surname        TEXT            NOT NULL,
recomend_patronymic     TEXT            NOT NULL,
recomend_workplase      TEXT            NOT NULL,
recomend_email          TEXT            NOT NULL,
recomend_phone          TEXT            NOT NULL
);


ALTER TABLE RECOMEND_TABLE ADD CONSTRAINT RECOMEND_TABLE__PK PRIMARY KEY(object_uuid);

CREATE INDEX RECOMEND_TABLE__OWNER__INDEX       ON RECOMEND_TABLE(owner_uuid);
CREATE INDEX RECOMEND_TABLE__RECOMEND__INDEX    ON RECOMEND_TABLE(recomend_uuid);
CREATE INDEX RECOMEND_TABLE__OWNER_TYPE__INDEX  ON RECOMEND_TABLE(owner_uuid, recomend_uuid);

ALTER TABLE RECOMEND_TABLE ADD COLUMN recomend_workposition TEXT NOT NULL;
ALTER TABLE RECOMEND_TABLE ADD COLUMN professionalism TEXT;
