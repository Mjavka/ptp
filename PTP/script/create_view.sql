         
CREATE VIEW some_info AS 
SELECT user_uuid,
                owner_uuid,
		program_uuid,
                property_name ||';'|| value_string AS property,
                resource_type ||';'|| resource_path AS resource,
                object_expert_uuid ||';'|| expert_sum AS expert
            FROM (
                SELECT 
                    0 as result_type,
                    user_program_ref.object_uuid as owner_uuid,
                    user_program_ref.program_uuid AS program_uuid,
                    user_program_ref.user_uuid AS user_uuid,
                    property_table.property_name AS property_name,
                    property_value.value_string AS value_string,
                    NULL as resource_type,
                    NULL as resource_path,
                    NULL::UUID as object_expert_uuid,
                    NULL::INTEGER as expert_sum
                FROM property_value
                LEFT JOIN property_table ON (property_table.object_uuid = property_value.property_uuid)
                LEFT JOIN user_program_ref ON (user_program_ref.object_uuid = property_value.owner_uuid)
                WHERE 
                    (property_value.property_uuid = 'a007f130-dc13-4717-a7a9-bb7de86713d2' OR
                    property_value.property_uuid = '76ccd760-d606-4eba-875c-5476b0354555' OR
                    property_value.property_uuid = '0b01362b-d540-4ec7-97d5-0792820c057f' OR
                    property_value.property_uuid = '9b9e979b-6447-4d7f-908a-4094110837db' OR
                    property_value.property_uuid = '3c888f4c-d483-4099-a044-8f37ab040202' OR
                    property_value.property_uuid = '545e464d-129d-40ba-aedc-a389a3d49204' OR
                    property_value.property_uuid = '6fa319fe-8eed-4ec9-8469-956bbab6aa64' OR
                    property_value.property_uuid = 'b7baae50-1c1a-4579-9986-a456ac67aaf9') AND
                    property_value.owner_uuid = user_program_ref.object_uuid

            UNION ALL

                SELECT
                    1 as result_type,
                    user_program_ref.object_uuid as owner_uuid,
                    user_program_ref.program_uuid as program_uuid,
                    user_program_ref.user_uuid as user_uuid,
                    NULL as property_name,
                    NULL as value_string,
                    resource_table.resource_type as resource_type,
                    resource_table.resource_path as resource_path,
                    NULL::UUID as object_expert_uuid,
                    NULL::INTEGER as expert_sum
                FROM resource_table
                LEFT JOIN user_program_ref ON (resource_table.owner_uuid = user_program_ref.object_uuid)
                WHERE resource_table.owner_uuid = user_program_ref.object_uuid
                
            UNION ALL

                SELECT
                    2 as result_type,
                    user_program_ref.object_uuid as owner_uuid,
                    user_program_ref.program_uuid as program_uuid,
                    user_program_ref.user_uuid as user_uuid,
                    NULL as property_name,
                    NULL as value_string,
                    NULL as resource_type,
                    NULL as resource_path,
                    evaluation_table.object_uuid as object_expert_uuid,
                        evaluation_table.expert_assessment_1+evaluation_table.expert_assessment_2+
                        evaluation_table.expert_assessment_3+evaluation_table.expert_assessment_4+
                        evaluation_table.expert_assessment_5 AS expert_sum
                FROM evaluation_table
                LEFT JOIN user_program_ref ON (evaluation_table.owner_uuid = user_program_ref.object_uuid)
                WHERE evaluation_table.owner_uuid = user_program_ref.object_uuid
                        
            ) AS sub
            ORDER BY user_uuid, result_type, property_name;