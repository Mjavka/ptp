
INSERT INTO "public".program_table (object_uuid,
                                    program_name,
                                    program_name_en,
                                    program_country,
                                    program_region,
                                    program_registered_begin_date,
                                    program_registered_end_date,
                                    program_begin_date,
                                    program_end_date)
VALUES ('f3a747d7-12d7-4f14-a8b7-ad1191803bdc',
        'Розвиток інноваційних підходів в освіті',
        'Innovation in Education',
        'Німеччина/Австрія',
        'Київ',
        '2013-08-01',
        '2013-09-01',
        '2013-10-01',
        '2013-12-01');




INSERT INTO "public".program_property_group_ref (program_uuid, property_group_uuid)
VALUES ('f3a747d7-12d7-4f14-a8b7-ad1191803bdc','c8a7bea9-e770-499e-9a6c-63f103a58d2e');

INSERT INTO "public".program_property_group_ref (program_uuid, property_group_uuid)
VALUES ('f3a747d7-12d7-4f14-a8b7-ad1191803bdc','b534ddc9-054e-42a2-badb-0d750b3a594f');

INSERT INTO "public".program_property_group_ref (program_uuid, property_group_uuid)
VALUES ('f3a747d7-12d7-4f14-a8b7-ad1191803bdc','081aacab-42b0-41e8-b40a-b0d3a9f914a0');

INSERT INTO "public".program_property_group_ref (program_uuid, property_group_uuid)
VALUES ('f3a747d7-12d7-4f14-a8b7-ad1191803bdc','f1a97d2f-51ae-4ba0-a034-6bbbbaee78fd');

INSERT INTO "public".program_property_group_ref (program_uuid, property_group_uuid)
VALUES ('f3a747d7-12d7-4f14-a8b7-ad1191803bdc','d357cd86-65b8-4018-b609-3e688e0283c5');
