<?php
if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

class OpportunitiesHookDefinitions {
    public function displaySugarApplicationMessages($bean, $event, $arguments) {
        SugarApplication::appendSuccessMessage('An Opportunity record is successfully created.');

        /**
         * Use the below code to display an error message
         */
        // SugarApplication::appendErrorMessage('A sample error message');
    }
}
?>