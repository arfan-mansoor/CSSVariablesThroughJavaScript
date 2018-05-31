
	/*  access variables in JS*/

    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      
      const suffix = this.dataset.sizing || '';
        /* this.dataset returns all the “data” prefixed properties and their values*/
      
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

      /* style.setProperty() takes in the name of the property, for example, the “name” attribute 
      assigned to an input, in our case spacing|blur|base, and takes in the value for that element,
      as in, the value assigned to the “value” attribute in that element. The value also must have 
      a unit-suffix if it applies (like px, s, pt, etc.).*/
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

