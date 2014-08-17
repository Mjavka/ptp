
UPDATE "public".property_table SET "property_order" = 23 WHERE object_uuid = '7fd8be18-cc3d-4526-94bd-f423bace156e';
UPDATE "public".property_table SET "property_order" = 24 WHERE object_uuid = 'fdd8eb8e-db3e-4b45-81ca-8bc34f80e24c';
UPDATE "public".property_table SET "property_order" = 25 WHERE object_uuid = '9e796d1d-07f6-4fbf-9c0d-e75b62073657';
UPDATE "public".property_table SET "property_order" = 26 WHERE object_uuid = 'cdc3efbd-1f39-4735-a963-06bdfffe7c74';
UPDATE "public".property_table SET "property_order" = 27 WHERE object_uuid = '4ae86b5e-b81a-4949-a1d7-b7160c9ca5da';
UPDATE "public".property_table SET "property_name" = 'Назва організації/установи (українською)' WHERE object_uuid = '5a0f245b-855a-424d-9312-e70fe026fb06';
UPDATE "public".property_table SET "property_name" = 'Керівник організації' WHERE object_uuid = '54a13ef8-7716-434e-a101-141b6bd9015d';
UPDATE "public".property_table SET "property_name" = 'Будь ласка, вкажіть нагороди або відзнаки, отримані вами під час навчання та дату їх отримання.' WHERE object_uuid = '23fee607-5081-46eb-adbc-423bd0908146';
UPDATE "public".property_table SET "property_required" = true WHERE object_uuid = 'c7141ac8-b397-4c6a-b715-d6ef4cf8fa07';
INSERT INTO "public".property_table (object_uuid, group_uuid, property_name, property_type, property_required, is_editable, property_default_value, property_notation, property_order, property_id, attributes_uuid, java_script)
	VALUES ('37acb9d4-c66a-4e12-a251-c1be86d3c137', '87375088-d700-4db3-8db3-010a6e6e9855', 'Район', 'TEXT', false, true, NULL, NULL, 235, NULL, NULL, NULL);
INSERT INTO "public".property_table (object_uuid, group_uuid, property_name, property_type, property_required, is_editable, property_default_value, property_notation, property_order, property_id, attributes_uuid, java_script)
	VALUES ('f433e4c6-14d4-4760-b253-624923d6aad3', '4cf4da4c-7396-4874-9ab7-d6827ad1ecad', 'Функціональні обов’язки', 'TEXT', false, true, NULL, '', 50, NULL, NULL, NULL);
