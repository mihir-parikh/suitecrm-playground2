<?php

$hook_array['after_save'][] = Array(
    1, 
    'Display success & failure messages', 
    'custom/modules/Opportunities/LogicHookDef/OpportunitiesHookDefinitions.php', 
    'OpportunitiesHookDefinitions', 
    'displaySugarApplicationMessages'
);