"use strict";!function(){var e=window.DecidimAdmin.createFieldDependentInputs,n=$("#conference_speaker_existing_user");e({controllerField:n,wrapperSelector:".user-fields",dependentFieldsSelector:".user-fields--full-name",dependentInputSelector:"input",enablingCondition:function(e){return"false"===e.val()}}),e({controllerField:n,wrapperSelector:".user-fields",dependentFieldsSelector:".user-fields--user-picker",dependentInputSelector:"input",enablingCondition:function(e){return"true"===e.val()}})}();