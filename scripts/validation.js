class Validation {
    selectors = {
        form: '[data-send-message-form]',
    }

    errors = {
        patternMismatch: ({title}) => title || "pattern missmatch",
        valueMissing: () => 'Fill this field',
    }

    constructor() {
        this.bindEvents();
    }

    errorsRender(field, errors) {
        if (errors.length > 0) {
            field.classList.add('input-error');
        } else {
            field.classList.remove('input-error');
        }
    }

    validateField(field) {
        const validity = field.validity;

        const fielderrors = [];

        Object.entries(this.errors).forEach(([errorName, errorValue]) => {
            if(validity[errorName]) {
                fielderrors.push(errorValue(field));
            }
        });

        let isValid = fielderrors.length === 0;

        this.errorsRender(field, fielderrors);

        return isValid;
    }

    onBlur(event) {
        const isRequired = event.target.required;
        const isForm = event.target.closest(this.selectors.form);

        if(isForm && isRequired) {
            this.validateField(event.target);
        }
    }

    onSubmit(event) {
        event.preventDefault();

        const isFormElement = event.target.matches(this.selectors.form);

        if(!isFormElement) {
            return
        }

        const formElements = [...event.target.elements].filter(({required}) => required);
        let isFormValid = true

        formElements.forEach((element) => {
            const isElementValid = this.validateField(element);

            if(!isElementValid) {
                isFormValid = false
            }
        })

        if(isFormValid) {
            document.querySelector(this.selectors.form).submit();
        }
    }

    bindEvents() {
        document.querySelector(this.selectors.form).addEventListener('blur', (event) => this.onBlur(event), {capture: true});
        document.querySelector(this.selectors.form).addEventListener('submit', (event) => this.onSubmit(event))
    }
}

export {Validation};