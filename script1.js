function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const variant = document.getElementById('variant').value;
    const group = document.getElementById('group').value;
    const phone = document.getElementById('phone').value;
    const idCard = document.getElementById('idCard').value;

    const namePattern = /^[А-ЯІЇЄҐ][а-яіїєґ']{1,6}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;  
    const variantPattern = /^\d{2}$/;                                        
    const groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;                             
    const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;                    
    const idCardPattern = /^[А-ЯІЇЄҐ]{2}\s№\d{6}$/;                          

    let isValid = true;
    const fields = [
        { element: document.getElementById('fullName'), pattern: namePattern },
        { element: document.getElementById('variant'), pattern: variantPattern },
        { element: document.getElementById('group'), pattern: groupPattern },
        { element: document.getElementById('phone'), pattern: phonePattern },
        { element: document.getElementById('idCard'), pattern: idCardPattern }
    ];

    fields.forEach(field => {
        if (field.pattern.test(field.element.value)) {
            field.element.classList.remove('error');  
            field.element.classList.add('valid');     
        } else {
            field.element.classList.remove('valid'); 
            field.element.classList.add('error');     
        }
    });

    if (isValid) {
        document.getElementById('outputFullName').textContent = fullName;
        document.getElementById('outputVariant').textContent = variant;
        document.getElementById('outputGroup').textContent = group;
        document.getElementById('outputPhone').textContent = phone;
        document.getElementById('outputIdCard').textContent = idCard;
    } else {
        alert("Будь ласка, виправте помилки у виділених полях.");
    }
}