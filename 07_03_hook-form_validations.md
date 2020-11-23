
## 07_03_hook-form_validations

- Define validation rules 

- Store errors in a state variable

- Prevent the form from submitting if any errors exist

---

> 1. ### Definim regulile de validare in fisier separat

---

> ### 2. importam functia de validare si o dam mai departe lui useFormLogic


---

> ### 3. Actualizam CustomHook-ul useFormLogic


- putem inspecta in debugger obiectul de erori la submit

---

> ### 4. Utilizam mecanismul de validare in componenta TaskForm

- practic vrem sa inspectam obiectul errors 

- daca gasim erori pe o proprietate, includem clasa `is-invalid`
    - si mesajul sub input


