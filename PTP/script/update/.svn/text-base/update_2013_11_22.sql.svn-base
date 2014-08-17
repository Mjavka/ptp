CREATE TABLE EXPERT_INFO_TABLE(
                        object_uuid             UUID            NOT NULL,
                        user_uuid               UUID            NOT NULL,
                        name_en                 TEXT,
                        skype                   TEXT,
                        organization_name       TEXT,
                        work_position           TEXT,
                        organization_name_en    TEXT,
                        work_position_en        TEXT,
                        organization_web_site   TEXT,
                        ownership               TEXT,

                        index                   TEXT,
                        region                  TEXT,
                        city                    TEXT,
                        street                  TEXT,
                        house                   TEXT,
                        pavilion                TEXT,
                        office                  TEXT,

                        work_phone              TEXT,
                        fax                     TEXT,
                        work_email              TEXT,
                        another_scope_expert    TEXT,
                        expert_text             TEXT
);

ALTER TABLE EXPERT_INFO_TABLE ADD CONSTRAINT EXPERT_INFO_TABLE_PK PRIMARY KEY(object_uuid);
ALTER TABLE EXPERT_INFO_TABLE ADD CONSTRAINT USER_EXPERT_INFO_REF__USER_UUID_FK FOREIGN KEY(user_uuid) REFERENCES USER_TABLE(object_uuid);

CREATE INDEX EXPERT_INFO__USER_UUID__INDEX          ON EXPERT_INFO_TABLE(user_uuid);


CREATE TABLE SCOPE_EXPERT_TABLE(
                            object_uuid             UUID            NOT NULL,
                            owner_uuid              UUID            NOT NULL,
                            scope                   TEXT
);
ALTER TABLE SCOPE_EXPERT_TABLE ADD CONSTRAINT SCOPE_EXPERT_TABLE_PK PRIMARY KEY(object_uuid);
ALTER TABLE SCOPE_EXPERT_TABLE ADD CONSTRAINT SCOPE_EXPERT_TABLE__EXPERT_INFO__FK FOREIGN KEY(owner_uuid) REFERENCES EXPERT_INFO_TABLE(object_uuid);
