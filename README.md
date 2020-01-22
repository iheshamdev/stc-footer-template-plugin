# STC-Footer-Template-Plugin
stc-footer-template-plugin has been created to help Qays's team with the issue of repeating (HtML && CSS) of the footer in each project, use this template plugin and you'll easily and quickly implement the footer.

## Usage
1. Add this script `<script src="https://stc-footer-template-plugin.netlify.com/main.js"></script>` before `</body>`
2. Create an empty div with class `.stc-footer-template` (**required**)
3. The default **language** of the footer is **English**, if you want to implement **Arabic** lang add `.ar` class to our element.
4. The default **theme** of the footer is **light**, if you want to implement the **dark** theme add `.dark-theme` class to our element

    Here we are
    ```html
    <div class="stc-footer-template ar dark-theme"></div>
    ```
    This div is going to create the stc-footer, **Arabic** language and the **dark-theme** will be implemented.
  
# Contribute to the project

1. Clone the project locally
2. Install dependencies:
   `yarn` or `npm i`
3. to run the project in dev mode and watch for file changes:
   `yarn dev` or `npm run dev`
   
## IMPORTANT NOTE!

-   we are temporarily serving the plugin via netlify, if/when we deploy this plugin to our servers then you will need to update this docs
