 body {
     font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

.dark-mode {
    background-color: #333;
    color: #f4f4f9;
}
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
++ b/frontend/src/components/RegistrationForm.js
@@ -1,6 +1,7 @@
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
 
 const RegistrationForm = ({ onSubmit }) => {
     return (
@@ -20,6 +21,7 @@ const RegistrationForm = ({ onSubmit }) => {
                 <Field type="email" name="email" placeholder="Email" />
                 <ErrorMessage name="email" component="div" className="error" />
 
                <button type="submit">Register</button>
             </Form>
         </Formik>
     );
 };
diff --git a/frontend/src/App.css b/frontend/src/App.css
++ b/frontend/src/App.css
@@ -1,3 +1,12 @@
 body {
     font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

.dark-mode {
    background-color: #333;
    color: #f4f4f9;
}
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
++ b/frontend/src/components/RegistrationForm.js
@@ -1,6 +1,7 @@
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
 
 const RegistrationForm = ({ onSubmit }) => {
     return (
@@ -20,6 +21,7 @@ const RegistrationForm = ({ onSubmit }) => {
                 <Field type="email" name="email" placeholder="Email" />
                 <ErrorMessage name="email" component="div" className="error" />
 
                <button type="submit">Register</button>
             </Form>
         </Formik>
     );
 };
