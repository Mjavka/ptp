CREATE TABLE EVALUATION_TABLE (
                        object_uuid                     UUID            NOT NULL,
                        expert_uuid                     UUID            NOT NULL,
                        owner_uuid                      UUID            NOT NULL,
                        expert_assessment_1             INTEGER         NOT NULL    DEFAULT 1,
                        expert_assessment_2             INTEGER         NOT NULL    DEFAULT 1,
                        expert_assessment_3             INTEGER         NOT NULL    DEFAULT 1,
                        expert_assessment_4             INTEGER         NOT NULL    DEFAULT 1,
                        expert_assessment_5             INTEGER         NOT NULL    DEFAULT 1
);
ALTER TABLE EVALUATION_TABLE ADD CONSTRAINT EVALUATION_TABLE_PK PRIMARY KEY(object_uuid);

CREATE INDEX EVALUATION_TABLE__EXPERT_UUID__INDEX ON EVALUATION_TABLE(expert_uuid);
CREATE INDEX EVALUATION_TABLE__OWNER_UUID__INDEX ON EVALUATION_TABLE(owner_uuid);