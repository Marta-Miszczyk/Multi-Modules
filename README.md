# Multi-Modules


GUARDS:

IF user not logged
THEN always redirect to login page

IF user logged in
THEN
  WHEN have no access to any modules 
    THEN redirect to base page with info "You have no access to modules!"
  WHEN try to access to not his module 
    THEN redirect to base page with info "You have no access to modules!" 
  WHEN try to open no exists page
    THEN redirect to 404 page
  WHEN have access to his module 
    THEN redrect to his module drectly after logged in
    
     
    
Modules structure:

- APP module
  - LOGIN module (soon module now as a component)
  - BASE module (with header common for other modules)
       - CON-PROJ module
       - DESKTOP module

