UPDATE "public".property_attributes SET (max_fields_count)=(3) WHERE object_uuid = '0b05bad0-ce33-451f-a89f-4bbd526e32be';

UPDATE "public".property_table SET (property_order)=(51) WHERE object_uuid = 'c7141ac8-b397-4c6a-b715-d6ef4cf8fa07';
UPDATE "public".property_table SET (property_order)=(52) WHERE object_uuid = 'a575d1c5-5f1a-4b96-b39d-6790d4e285af';
UPDATE "public".property_table SET (property_order)=(47) WHERE object_uuid = '8f2b3f5f-6d27-425f-8812-1e53892fac4a';
UPDATE "public".property_table SET (property_order)=(48) WHERE object_uuid = '48939be0-22ae-4c88-8ed3-457d4934285e';
UPDATE "public".property_table SET (property_order)=(49) WHERE object_uuid = '808ee3a5-dd40-45f1-83f0-4f12cea36116';
UPDATE "public".property_table SET (property_order)=(50) WHERE object_uuid = '39e6640e-b2b0-485c-bc49-40797a4fe3f2';

INSERT INTO "public".property_group_table (
object_uuid,
group_name,
property_group_order,
active,
group_name_en,
general_group
) VALUES (
'8bdb8715-69b1-444c-a21f-2d05edb36235',
'VI. Завантаження документів',
5,
true,
'VI. Download documents',
true);


INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'bce10076-e215-4f18-8fb1-f48b8109642a',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'f3a747d7-12d7-4f14-a8b7-ad1191803bdc',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'd5b2fa39-83fa-4058-bcca-21359f0c46ab',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'b5ea6932-b957-4814-847f-d7562084f70d',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'763fca92-22a1-4dbd-b284-cb5fa4c7c481',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'ed0fedc4-f9fa-421d-b77a-963d6c5edea4',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'2a40bfeb-7c51-4dbc-8152-920568d0c5f1',
'8bdb8715-69b1-444c-a21f-2d05edb36235');

INSERT INTO "public".program_property_group_ref (
program_uuid,
property_group_uuid) VALUES(
'21d2c4c2-974d-4a14-b63c-1624a8a3cbc5',
'8bdb8715-69b1-444c-a21f-2d05edb36235');



ALTER TABLE "public".user_table ADD COLUMN new_user_email           TEXT;
ALTER TABLE "public".user_table ADD COLUMN new_user_password        TEXT;
ALTER TABLE "public".user_table ADD COLUMN new_user_name            TEXT;
ALTER TABLE "public".user_table ADD COLUMN new_user_surname         TEXT;
ALTER TABLE "public".user_table ADD COLUMN new_user_patronymic      TEXT;
ALTER TABLE "public".user_table ADD COLUMN new_user_phone_mobile    TEXT;
ALTER TABLE "public".user_table ADD COLUMN new_user_birthday        DATE;
ALTER TABLE "public".user_table ADD COLUMN new_user_sex             TEXT;

ALTER TABLE "public".user_table ADD COLUMN new_user_info            BOOLEAN DEFAULT FALSE;