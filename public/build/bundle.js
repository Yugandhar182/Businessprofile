
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var RecruitlyUserprofile = (function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$2 = "/* Write your global styles here, in PostCSS syntax */\r\n/* ! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com */\r\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\r\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #E5E7EB; /* 2 */\n}\r\n::before,\n::after {\n  --tw-content: '';\n}\r\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\r\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\r\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\r\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\r\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\r\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\r\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\r\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\r\n/*\nRemove the default font size and weight for headings.\n*/\r\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\r\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\r\na {\n  color: inherit;\n  text-decoration: inherit;\n}\r\n/*\nAdd the correct font weight in Edge and Safari.\n*/\r\nb,\nstrong {\n  font-weight: bolder;\n}\r\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\r\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\r\n/*\nAdd the correct font size in all browsers.\n*/\r\nsmall {\n  font-size: 80%;\n}\r\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\r\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\r\nsub {\n  bottom: -0.25em;\n}\r\nsup {\n  top: -0.5em;\n}\r\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\r\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\r\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\r\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\r\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\r\nbutton,\nselect {\n  text-transform: none;\n}\r\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\r\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\r\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\r\n:-moz-focusring {\n  outline: auto;\n}\r\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\r\n:-moz-ui-invalid {\n  box-shadow: none;\n}\r\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\r\nprogress {\n  vertical-align: baseline;\n}\r\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\r\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\r\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\r\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\r\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\r\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\r\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\r\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\r\n/*\nAdd the correct display in Chrome and Safari.\n*/\r\nsummary {\n  display: list-item;\n}\r\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\r\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\r\nfieldset {\n  margin: 0;\n  padding: 0;\n}\r\nlegend {\n  padding: 0;\n}\r\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\r\n/*\nReset default styling for dialogs.\n*/\r\ndialog {\n  padding: 0;\n}\r\n/*\nPrevent resizing textareas horizontally by default.\n*/\r\ntextarea {\n  resize: vertical;\n}\r\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9CA3AF; /* 2 */\n}\r\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9CA3AF; /* 2 */\n}\r\n/*\nSet the default cursor for buttons.\n*/\r\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\r\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\r\n:disabled {\n  cursor: default;\n}\r\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\r\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\r\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\r\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n[hidden] {\n  display: none;\n}\r\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6B7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\r\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #1C64F2;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #1C64F2;\n}\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6B7280;\n  opacity: 1;\n}\r\ninput::placeholder,textarea::placeholder {\n  color: #6B7280;\n  opacity: 1;\n}\r\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\r\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\r\nselect:not([size]) {\n  background-image: url(\"data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e\");\n  background-position: right 0.75rem center;\n  background-repeat: no-repeat;\n  background-size: 0.75em 0.75em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\r\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n          print-color-adjust: unset;\n}\r\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #1C64F2;\n  background-color: #fff;\n  border-color: #6B7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\r\n[type='checkbox'] {\n  border-radius: 0px;\n}\r\n[type='radio'] {\n  border-radius: 100%;\n}\r\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #1C64F2;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\r\n[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 0.55em 0.55em;\n  background-position: center;\n  background-repeat: no-repeat;\n}\r\n[type='checkbox']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: 0.55em 0.55em;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\r\n[type='radio']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n  background-size: 1em 1em;\n}\r\n.dark [type='radio']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n  background-size: 1em 1em;\n}\r\n[type='checkbox']:indeterminate {\n  background-image: url(\"data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e\");\n  background-color: currentColor;\n  border-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 0.55em 0.55em;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\r\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\r\n[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\r\n[type='file']:focus {\n  outline: 1px auto inherit;\n}\r\ninput[type=file]::file-selector-button {\n  color: white;\n  background: #1F2937;\n  border: 0;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  margin-inline-start: -1rem;\n  margin-inline-end: 1rem;\n}\r\ninput[type=file]::file-selector-button:hover {\n  background: #374151;\n}\r\n.dark input[type=file]::file-selector-button {\n  color: white;\n  background: #4B5563;\n}\r\n.dark input[type=file]::file-selector-button:hover {\n  background: #6B7280;\n}\r\ninput[type=\"range\"]::-webkit-slider-thumb {\n  height: 1.25rem;\n  width: 1.25rem;\n  background: #1C64F2;\n  border-radius: 9999px;\n  border: 0;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\r\ninput[type=\"range\"]:disabled::-webkit-slider-thumb {\n  background: #9CA3AF;\n}\r\n.dark input[type=\"range\"]:disabled::-webkit-slider-thumb {\n  background: #6B7280;\n}\r\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1px;\n  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));\n}\r\ninput[type=\"range\"]::-moz-range-thumb {\n  height: 1.25rem;\n  width: 1.25rem;\n  background: #1C64F2;\n  border-radius: 9999px;\n  border: 0;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\r\ninput[type=\"range\"]:disabled::-moz-range-thumb {\n  background: #9CA3AF;\n}\r\n.dark input[type=\"range\"]:disabled::-moz-range-thumb {\n  background: #6B7280;\n}\r\ninput[type=\"range\"]::-moz-range-progress {\n  background: #3F83F8;\n}\r\ninput[type=\"range\"]::-ms-fill-lower {\n  background: #3F83F8;\n}\r\ninput[type=\"range\"].range-sm::-webkit-slider-thumb {\n  height: 1rem;\n  width: 1rem;\n}\r\ninput[type=\"range\"].range-lg::-webkit-slider-thumb {\n  height: 1.5rem;\n  width: 1.5rem;\n}\r\ninput[type=\"range\"].range-sm::-moz-range-thumb {\n  height: 1rem;\n  width: 1rem;\n}\r\ninput[type=\"range\"].range-lg::-moz-range-thumb {\n  height: 1.5rem;\n  width: 1.5rem;\n}\r\n[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {\n  border-style: solid;\n  border-color: #e5e7eb;\n}\r\n[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {\n  border-bottom-width: 1px;\n  border-right-width: 1px;\n}\r\n[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {\n  border-bottom-width: 1px;\n  border-left-width: 1px;\n}\r\n[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {\n  border-top-width: 1px;\n  border-left-width: 1px;\n}\r\n[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {\n  border-top-width: 1px;\n  border-right-width: 1px;\n}\r\n.tooltip[data-popper-placement^='top'] > .tooltip-arrow {\n  bottom: -4px;\n}\r\n.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {\n  top: -4px;\n}\r\n.tooltip[data-popper-placement^='left'] > .tooltip-arrow {\n  right: -4px;\n}\r\n.tooltip[data-popper-placement^='right'] > .tooltip-arrow {\n  left: -4px;\n}\r\n.tooltip.invisible > .tooltip-arrow:before {\n  visibility: hidden;\n}\r\n[data-popper-arrow],[data-popper-arrow]:before {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: inherit;\n}\r\n[data-popper-arrow] {\n  visibility: hidden;\n}\r\n[data-popper-arrow]:before {\n  content: \"\";\n  visibility: visible;\n  transform: rotate(45deg);\n}\r\n[data-popper-arrow]:after {\n  content: \"\";\n  visibility: visible;\n  transform: rotate(45deg);\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  background: inherit;\n}\r\n[role=\"tooltip\"] > [data-popper-arrow]:before {\n  border-style: solid;\n  border-color: #e5e7eb;\n}\r\n.dark [role=\"tooltip\"] > [data-popper-arrow]:before {\n  border-style: solid;\n  border-color: #4b5563;\n}\r\n[role=\"tooltip\"] > [data-popper-arrow]:after {\n  border-style: solid;\n  border-color: #e5e7eb;\n}\r\n.dark [role=\"tooltip\"] > [data-popper-arrow]:after {\n  border-style: solid;\n  border-color: #4b5563;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='top'] > [data-popper-arrow]:before {\n  border-bottom-width: 1px;\n  border-right-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='top'] > [data-popper-arrow]:after {\n  border-bottom-width: 1px;\n  border-right-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='right'] > [data-popper-arrow]:before {\n  border-bottom-width: 1px;\n  border-left-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='right'] > [data-popper-arrow]:after {\n  border-bottom-width: 1px;\n  border-left-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='bottom'] > [data-popper-arrow]:before {\n  border-top-width: 1px;\n  border-left-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='bottom'] > [data-popper-arrow]:after {\n  border-top-width: 1px;\n  border-left-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='left'] > [data-popper-arrow]:before {\n  border-top-width: 1px;\n  border-right-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='left'] > [data-popper-arrow]:after {\n  border-top-width: 1px;\n  border-right-width: 1px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='top'] > [data-popper-arrow] {\n  bottom: -5px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='bottom'] > [data-popper-arrow] {\n  top: -5px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='left'] > [data-popper-arrow] {\n  right: -5px;\n}\r\n[data-popover][role=\"tooltip\"][data-popper-placement^='right'] > [data-popper-arrow] {\n  left: -5px;\n}\r\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(63 131 248 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(63 131 248 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\r\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\r\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\r\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\r\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\r\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\r\n.pointer-events-none {\n  pointer-events: none;\n}\r\n.static {\n  position: static;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.sticky {\n  position: sticky;\n}\r\n.-inset-1 {\n  inset: -0.25rem;\n}\r\n.inset-0 {\n  inset: 0px;\n}\r\n.inset-x-0 {\n  left: 0px;\n  right: 0px;\n}\r\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\r\n.-left-1 {\n  left: -0.25rem;\n}\r\n.-left-1\\.5 {\n  left: -0.375rem;\n}\r\n.-left-14 {\n  left: -3.5rem;\n}\r\n.-left-3 {\n  left: -0.75rem;\n}\r\n.-left-\\[17px\\] {\n  left: -17px;\n}\r\n.-right-\\[16px\\] {\n  right: -16px;\n}\r\n.-right-\\[17px\\] {\n  right: -17px;\n}\r\n.bottom-0 {\n  bottom: 0px;\n}\r\n.bottom-4 {\n  bottom: 1rem;\n}\r\n.bottom-5 {\n  bottom: 1.25rem;\n}\r\n.bottom-6 {\n  bottom: 1.5rem;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.left-1 {\n  left: 0.25rem;\n}\r\n.left-1\\/2 {\n  left: 50%;\n}\r\n.left-2 {\n  left: 0.5rem;\n}\r\n.left-2\\.5 {\n  left: 0.625rem;\n}\r\n.left-5 {\n  left: 1.25rem;\n}\r\n.right-0 {\n  right: 0px;\n}\r\n.right-2 {\n  right: 0.5rem;\n}\r\n.right-2\\.5 {\n  right: 0.625rem;\n}\r\n.right-5 {\n  right: 1.25rem;\n}\r\n.right-6 {\n  right: 1.5rem;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.top-1 {\n  top: 0.25rem;\n}\r\n.top-1\\/2 {\n  top: 50%;\n}\r\n.top-2 {\n  top: 0.5rem;\n}\r\n.top-3 {\n  top: 0.75rem;\n}\r\n.top-4 {\n  top: 1rem;\n}\r\n.top-5 {\n  top: 1.25rem;\n}\r\n.top-6 {\n  top: 1.5rem;\n}\r\n.top-\\[124px\\] {\n  top: 124px;\n}\r\n.top-\\[142px\\] {\n  top: 142px;\n}\r\n.top-\\[178px\\] {\n  top: 178px;\n}\r\n.top-\\[40px\\] {\n  top: 40px;\n}\r\n.top-\\[72px\\] {\n  top: 72px;\n}\r\n.top-\\[88px\\] {\n  top: 88px;\n}\r\n.top-\\[calc\\(100\\%\\+1rem\\)\\] {\n  top: calc(100% + 1rem);\n}\r\n.-z-10 {\n  z-index: -10;\n}\r\n.z-0 {\n  z-index: 0;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.z-30 {\n  z-index: 30;\n}\r\n.z-40 {\n  z-index: 40;\n}\r\n.z-50 {\n  z-index: 50;\n}\r\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\r\n.m-0 {\n  margin: 0px;\n}\r\n.m-0\\.5 {\n  margin: 0.125rem;\n}\r\n.-mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\r\n.-mx-1\\.5 {\n  margin-left: -0.375rem;\n  margin-right: -0.375rem;\n}\r\n.-my-1 {\n  margin-top: -0.25rem;\n  margin-bottom: -0.25rem;\n}\r\n.-my-1\\.5 {\n  margin-top: -0.375rem;\n  margin-bottom: -0.375rem;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\r\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\r\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\r\n.-mb-px {\n  margin-bottom: -1px;\n}\r\n.-ml-1 {\n  margin-left: -0.25rem;\n}\r\n.-ml-4 {\n  margin-left: -1rem;\n}\r\n.-mr-1 {\n  margin-right: -0.25rem;\n}\r\n.-mr-1\\.5 {\n  margin-right: -0.375rem;\n}\r\n.-mt-px {\n  margin-top: -1px;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-2\\.5 {\n  margin-bottom: 0.625rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.mb-px {\n  margin-bottom: 1px;\n}\r\n.ml-1 {\n  margin-left: 0.25rem;\n}\r\n.ml-1\\.5 {\n  margin-left: 0.375rem;\n}\r\n.ml-2 {\n  margin-left: 0.5rem;\n}\r\n.ml-3 {\n  margin-left: 0.75rem;\n}\r\n.ml-4 {\n  margin-left: 1rem;\n}\r\n.ml-6 {\n  margin-left: 1.5rem;\n}\r\n.ml-auto {\n  margin-left: auto;\n}\r\n.mr-1 {\n  margin-right: 0.25rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mr-4 {\n  margin-right: 1rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.inline {\n  display: inline;\n}\r\n.flex {\n  display: flex;\n}\r\n.inline-flex {\n  display: inline-flex;\n}\r\n.table {\n  display: table;\n}\r\n.grid {\n  display: grid;\n}\r\n.contents {\n  display: contents;\n}\r\n.\\!hidden {\n  display: none !important;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-0 {\n  height: 0px;\n}\r\n.h-0\\.5 {\n  height: 0.125rem;\n}\r\n.h-1 {\n  height: 0.25rem;\n}\r\n.h-10 {\n  height: 2.5rem;\n}\r\n.h-12 {\n  height: 3rem;\n}\r\n.h-14 {\n  height: 3.5rem;\n}\r\n.h-16 {\n  height: 4rem;\n}\r\n.h-2 {\n  height: 0.5rem;\n}\r\n.h-2\\.5 {\n  height: 0.625rem;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-24 {\n  height: 6rem;\n}\r\n.h-3 {\n  height: 0.75rem;\n}\r\n.h-3\\.5 {\n  height: 0.875rem;\n}\r\n.h-36 {\n  height: 9rem;\n}\r\n.h-4 {\n  height: 1rem;\n}\r\n.h-48 {\n  height: 12rem;\n}\r\n.h-5 {\n  height: 1.25rem;\n}\r\n.h-56 {\n  height: 14rem;\n}\r\n.h-6 {\n  height: 1.5rem;\n}\r\n.h-64 {\n  height: 16rem;\n}\r\n.h-7 {\n  height: 1.75rem;\n}\r\n.h-72 {\n  height: 18rem;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.h-80 {\n  height: 20rem;\n}\r\n.h-96 {\n  height: 24rem;\n}\r\n.h-\\[10px\\] {\n  height: 10px;\n}\r\n.h-\\[140px\\] {\n  height: 140px;\n}\r\n.h-\\[156px\\] {\n  height: 156px;\n}\r\n.h-\\[172px\\] {\n  height: 172px;\n}\r\n.h-\\[17px\\] {\n  height: 17px;\n}\r\n.h-\\[18px\\] {\n  height: 18px;\n}\r\n.h-\\[193px\\] {\n  height: 193px;\n}\r\n.h-\\[213px\\] {\n  height: 213px;\n}\r\n.h-\\[24px\\] {\n  height: 24px;\n}\r\n.h-\\[32px\\] {\n  height: 32px;\n}\r\n.h-\\[41px\\] {\n  height: 41px;\n}\r\n.h-\\[426px\\] {\n  height: 426px;\n}\r\n.h-\\[454px\\] {\n  height: 454px;\n}\r\n.h-\\[46px\\] {\n  height: 46px;\n}\r\n.h-\\[52px\\] {\n  height: 52px;\n}\r\n.h-\\[55px\\] {\n  height: 55px;\n}\r\n.h-\\[572px\\] {\n  height: 572px;\n}\r\n.h-\\[5px\\] {\n  height: 5px;\n}\r\n.h-\\[600px\\] {\n  height: 600px;\n}\r\n.h-\\[63px\\] {\n  height: 63px;\n}\r\n.h-\\[64px\\] {\n  height: 64px;\n}\r\n.h-auto {\n  height: auto;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-modal {\n  height: calc(100% - 2rem);\n}\r\n.h-px {\n  height: 1px;\n}\r\n.max-h-64 {\n  max-height: 16rem;\n}\r\n.max-h-full {\n  max-height: 100%;\n}\r\n.w-1 {\n  width: 0.25rem;\n}\r\n.w-1\\/2 {\n  width: 50%;\n}\r\n.w-10 {\n  width: 2.5rem;\n}\r\n.w-10\\/12 {\n  width: 83.333333%;\n}\r\n.w-11 {\n  width: 2.75rem;\n}\r\n.w-11\\/12 {\n  width: 91.666667%;\n}\r\n.w-12 {\n  width: 3rem;\n}\r\n.w-14 {\n  width: 3.5rem;\n}\r\n.w-2 {\n  width: 0.5rem;\n}\r\n.w-2\\.5 {\n  width: 0.625rem;\n}\r\n.w-2\\/4 {\n  width: 50%;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-24 {\n  width: 6rem;\n}\r\n.w-3 {\n  width: 0.75rem;\n}\r\n.w-3\\.5 {\n  width: 0.875rem;\n}\r\n.w-32 {\n  width: 8rem;\n}\r\n.w-36 {\n  width: 9rem;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-44 {\n  width: 11rem;\n}\r\n.w-48 {\n  width: 12rem;\n}\r\n.w-5 {\n  width: 1.25rem;\n}\r\n.w-6 {\n  width: 1.5rem;\n}\r\n.w-64 {\n  width: 16rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-8\\/12 {\n  width: 66.666667%;\n}\r\n.w-80 {\n  width: 20rem;\n}\r\n.w-9 {\n  width: 2.25rem;\n}\r\n.w-9\\/12 {\n  width: 75%;\n}\r\n.w-\\[10px\\] {\n  width: 10px;\n}\r\n.w-\\[148px\\] {\n  width: 148px;\n}\r\n.w-\\[188px\\] {\n  width: 188px;\n}\r\n.w-\\[1px\\] {\n  width: 1px;\n}\r\n.w-\\[208px\\] {\n  width: 208px;\n}\r\n.w-\\[272px\\] {\n  width: 272px;\n}\r\n.w-\\[300px\\] {\n  width: 300px;\n}\r\n.w-\\[3px\\] {\n  width: 3px;\n}\r\n.w-\\[52px\\] {\n  width: 52px;\n}\r\n.w-\\[56px\\] {\n  width: 56px;\n}\r\n.w-\\[6px\\] {\n  width: 6px;\n}\r\n.w-\\[calc\\(100\\%-2rem\\)\\] {\n  width: calc(100% - 2rem);\n}\r\n.w-full {\n  width: 100%;\n}\r\n.max-w-2xl {\n  max-width: 42rem;\n}\r\n.max-w-4xl {\n  max-width: 56rem;\n}\r\n.max-w-7xl {\n  max-width: 80rem;\n}\r\n.max-w-\\[133px\\] {\n  max-width: 133px;\n}\r\n.max-w-\\[301px\\] {\n  max-width: 301px;\n}\r\n.max-w-\\[341px\\] {\n  max-width: 341px;\n}\r\n.max-w-\\[351px\\] {\n  max-width: 351px;\n}\r\n.max-w-\\[540px\\] {\n  max-width: 540px;\n}\r\n.max-w-\\[640px\\] {\n  max-width: 640px;\n}\r\n.max-w-\\[83px\\] {\n  max-width: 83px;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.max-w-lg {\n  max-width: 32rem;\n}\r\n.max-w-md {\n  max-width: 28rem;\n}\r\n.max-w-screen-md {\n  max-width: 768px;\n}\r\n.max-w-screen-xl {\n  max-width: 1280px;\n}\r\n.max-w-sm {\n  max-width: 24rem;\n}\r\n.max-w-xl {\n  max-width: 36rem;\n}\r\n.max-w-xs {\n  max-width: 20rem;\n}\r\n.flex-1 {\n  flex: 1 1 0%;\n}\r\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\r\n.shrink-0 {\n  flex-shrink: 0;\n}\r\n.origin-\\[0\\] {\n  transform-origin: 0;\n}\r\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-1\\/3 {\n  --tw-translate-x: -33.333333%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-1\\/3 {\n  --tw-translate-y: -33.333333%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-4 {\n  --tw-translate-y: -1rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-1\\/3 {\n  --tw-translate-x: 33.333333%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-y-1\\/3 {\n  --tw-translate-y: 33.333333%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.rotate-45 {\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n@keyframes pulse {\r\n  50% {\n    opacity: .5;\n  }\n}\r\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\r\n@keyframes spin {\r\n  to {\n    transform: rotate(360deg);\n  }\n}\r\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\r\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.resize {\n  resize: both;\n}\r\n.list-inside {\n  list-style-position: inside;\n}\r\n.list-outside {\n  list-style-position: outside;\n}\r\n.list-decimal {\n  list-style-type: decimal;\n}\r\n.list-disc {\n  list-style-type: disc;\n}\r\n.list-none {\n  list-style-type: none;\n}\r\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.grid-flow-row {\n  grid-auto-flow: row;\n}\r\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\r\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\r\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\r\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-end {\n  align-items: flex-end;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.items-baseline {\n  align-items: baseline;\n}\r\n.justify-start {\n  justify-content: flex-start;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-1 {\n  gap: 0.25rem;\n}\r\n.gap-2 {\n  gap: 0.5rem;\n}\r\n.gap-3 {\n  gap: 0.75rem;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-6 {\n  gap: 1.5rem;\n}\r\n.gap-8 {\n  gap: 2rem;\n}\r\n.gap-y-4 {\n  row-gap: 1rem;\n}\r\n.-space-x-px > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-1px * var(--tw-space-x-reverse));\n  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\r\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\r\n.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\r\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\r\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\r\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\r\n.divide-x > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(1px * var(--tw-divide-x-reverse));\n  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n}\r\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\r\n.divide-blue-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(164 202 254 / var(--tw-divide-opacity));\n}\r\n.divide-blue-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(118 169 250 / var(--tw-divide-opacity));\n}\r\n.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-divide-opacity));\n}\r\n.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity));\n}\r\n.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-divide-opacity));\n}\r\n.divide-gray-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-divide-opacity));\n}\r\n.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-divide-opacity));\n}\r\n.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-divide-opacity));\n}\r\n.divide-green-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(132 225 188 / var(--tw-divide-opacity));\n}\r\n.divide-green-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(49 196 141 / var(--tw-divide-opacity));\n}\r\n.divide-indigo-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(180 198 252 / var(--tw-divide-opacity));\n}\r\n.divide-indigo-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(141 162 251 / var(--tw-divide-opacity));\n}\r\n.divide-orange-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(253 186 140 / var(--tw-divide-opacity));\n}\r\n.divide-pink-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(248 180 217 / var(--tw-divide-opacity));\n}\r\n.divide-pink-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(241 126 184 / var(--tw-divide-opacity));\n}\r\n.divide-primary-500 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-divide-opacity));\n}\r\n.divide-purple-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(202 191 253 / var(--tw-divide-opacity));\n}\r\n.divide-purple-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(172 148 250 / var(--tw-divide-opacity));\n}\r\n.divide-red-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(248 180 180 / var(--tw-divide-opacity));\n}\r\n.divide-red-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(249 128 128 / var(--tw-divide-opacity));\n}\r\n.divide-yellow-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(250 202 21 / var(--tw-divide-opacity));\n}\r\n.divide-yellow-400 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(227 160 8 / var(--tw-divide-opacity));\n}\r\n.self-center {\n  align-self: center;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.overflow-x-auto {\n  overflow-x: auto;\n}\r\n.overflow-y-auto {\n  overflow-y: auto;\n}\r\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\r\n.overscroll-contain {\n  overscroll-behavior: contain;\n}\r\n.whitespace-normal {\n  white-space: normal;\n}\r\n.whitespace-nowrap {\n  white-space: nowrap;\n}\r\n.whitespace-pre {\n  white-space: pre;\n}\r\n.whitespace-pre-line {\n  white-space: pre-line;\n}\r\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\r\n.\\!rounded-md {\n  border-radius: 0.375rem !important;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-\\[2\\.5rem\\] {\n  border-radius: 2.5rem;\n}\r\n.rounded-\\[2rem\\] {\n  border-radius: 2rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded-sm {\n  border-radius: 0.125rem;\n}\r\n.rounded-xl {\n  border-radius: 0.75rem;\n}\r\n.rounded-b {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\r\n.rounded-b-\\[1rem\\] {\n  border-bottom-right-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\r\n.rounded-b-\\[2\\.5rem\\] {\n  border-bottom-right-radius: 2.5rem;\n  border-bottom-left-radius: 2.5rem;\n}\r\n.rounded-b-lg {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\r\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\r\n.rounded-l {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\r\n.rounded-l-full {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\r\n.rounded-l-lg {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\r\n.rounded-r {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\r\n.rounded-r-full {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\r\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\r\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\r\n.rounded-t-\\[2\\.5rem\\] {\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\r\n.rounded-t-lg {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\r\n.rounded-t-md {\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\r\n.rounded-t-sm {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\r\n.rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\r\n.\\!border-0 {\n  border-width: 0px !important;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-0 {\n  border-width: 0px;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-\\[10px\\] {\n  border-width: 10px;\n}\r\n.border-\\[14px\\] {\n  border-width: 14px;\n}\r\n.border-\\[16px\\] {\n  border-width: 16px;\n}\r\n.border-\\[8px\\] {\n  border-width: 8px;\n}\r\n.border-x {\n  border-left-width: 1px;\n  border-right-width: 1px;\n}\r\n.border-y {\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\r\n.border-b {\n  border-bottom-width: 1px;\n}\r\n.border-b-2 {\n  border-bottom-width: 2px;\n}\r\n.border-l {\n  border-left-width: 1px;\n}\r\n.border-l-0 {\n  border-left-width: 0px;\n}\r\n.border-l-4 {\n  border-left-width: 4px;\n}\r\n.border-r {\n  border-right-width: 1px;\n}\r\n.border-t {\n  border-top-width: 1px;\n}\r\n.border-dashed {\n  border-style: dashed;\n}\r\n.border-blue-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(164 202 254 / var(--tw-border-opacity));\n}\r\n.border-blue-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(118 169 250 / var(--tw-border-opacity));\n}\r\n.border-blue-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(26 86 219 / var(--tw-border-opacity));\n}\r\n.border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity));\n}\r\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\r\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\r\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\r\n.border-gray-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\r\n.border-gray-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity));\n}\r\n.border-green-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(132 225 188 / var(--tw-border-opacity));\n}\r\n.border-green-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(49 196 141 / var(--tw-border-opacity));\n}\r\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 159 110 / var(--tw-border-opacity));\n}\r\n.border-green-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(5 122 85 / var(--tw-border-opacity));\n}\r\n.border-green-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(4 108 78 / var(--tw-border-opacity));\n}\r\n.border-indigo-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(180 198 252 / var(--tw-border-opacity));\n}\r\n.border-indigo-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(141 162 251 / var(--tw-border-opacity));\n}\r\n.border-inherit {\n  border-color: inherit;\n}\r\n.border-orange-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 186 140 / var(--tw-border-opacity));\n}\r\n.border-pink-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(248 180 217 / var(--tw-border-opacity));\n}\r\n.border-pink-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(241 126 184 / var(--tw-border-opacity));\n}\r\n.border-primary-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 188 173 / var(--tw-border-opacity));\n}\r\n.border-primary-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-border-opacity));\n}\r\n.border-primary-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 86 47 / var(--tw-border-opacity));\n}\r\n.border-primary-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(235 79 39 / var(--tw-border-opacity));\n}\r\n.border-purple-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(202 191 253 / var(--tw-border-opacity));\n}\r\n.border-purple-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(172 148 250 / var(--tw-border-opacity));\n}\r\n.border-purple-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(108 43 217 / var(--tw-border-opacity));\n}\r\n.border-red-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(248 180 180 / var(--tw-border-opacity));\n}\r\n.border-red-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(249 128 128 / var(--tw-border-opacity));\n}\r\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(240 82 82 / var(--tw-border-opacity));\n}\r\n.border-red-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(224 36 36 / var(--tw-border-opacity));\n}\r\n.border-red-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(200 30 30 / var(--tw-border-opacity));\n}\r\n.border-transparent {\n  border-color: transparent;\n}\r\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n.border-yellow-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(250 202 21 / var(--tw-border-opacity));\n}\r\n.border-yellow-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(227 160 8 / var(--tw-border-opacity));\n}\r\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(225 239 254 / var(--tw-bg-opacity));\n}\r\n.bg-blue-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(195 221 253 / var(--tw-bg-opacity));\n}\r\n.bg-blue-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 245 255 / var(--tw-bg-opacity));\n}\r\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 131 248 / var(--tw-bg-opacity));\n}\r\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 100 242 / var(--tw-bg-opacity));\n}\r\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 86 219 / var(--tw-bg-opacity));\n}\r\n.bg-blue-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 66 159 / var(--tw-bg-opacity));\n}\r\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\r\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\r\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\r\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(222 247 236 / var(--tw-bg-opacity));\n}\r\n.bg-green-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 250 247 / var(--tw-bg-opacity));\n}\r\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 159 110 / var(--tw-bg-opacity));\n}\r\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 122 85 / var(--tw-bg-opacity));\n}\r\n.bg-green-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 108 78 / var(--tw-bg-opacity));\n}\r\n.bg-green-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 84 63 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 237 255 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 245 255 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(104 117 245 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 80 236 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(66 56 157 / var(--tw-bg-opacity));\n}\r\n.bg-inherit {\n  background-color: inherit;\n}\r\n.bg-orange-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 236 220 / var(--tw-bg-opacity));\n}\r\n.bg-orange-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 248 241 / var(--tw-bg-opacity));\n}\r\n.bg-orange-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(208 56 1 / var(--tw-bg-opacity));\n}\r\n.bg-pink-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 232 243 / var(--tw-bg-opacity));\n}\r\n.bg-pink-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 242 248 / var(--tw-bg-opacity));\n}\r\n.bg-pink-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 70 148 / var(--tw-bg-opacity));\n}\r\n.bg-pink-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(153 21 75 / var(--tw-bg-opacity));\n}\r\n.bg-primary-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 241 238 / var(--tw-bg-opacity));\n}\r\n.bg-primary-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 228 222 / var(--tw-bg-opacity));\n}\r\n.bg-primary-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 245 242 / var(--tw-bg-opacity));\n}\r\n.bg-primary-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 121 93 / var(--tw-bg-opacity));\n}\r\n.bg-primary-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 86 47 / var(--tw-bg-opacity));\n}\r\n.bg-primary-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 79 39 / var(--tw-bg-opacity));\n}\r\n.bg-primary-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(204 69 34 / var(--tw-bg-opacity));\n}\r\n.bg-purple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(237 235 254 / var(--tw-bg-opacity));\n}\r\n.bg-purple-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(246 245 255 / var(--tw-bg-opacity));\n}\r\n.bg-purple-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 97 249 / var(--tw-bg-opacity));\n}\r\n.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(126 58 242 / var(--tw-bg-opacity));\n}\r\n.bg-purple-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(108 43 217 / var(--tw-bg-opacity));\n}\r\n.bg-purple-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 33 181 / var(--tw-bg-opacity));\n}\r\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 232 232 / var(--tw-bg-opacity));\n}\r\n.bg-red-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 242 242 / var(--tw-bg-opacity));\n}\r\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 82 82 / var(--tw-bg-opacity));\n}\r\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 36 36 / var(--tw-bg-opacity));\n}\r\n.bg-red-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(200 30 30 / var(--tw-bg-opacity));\n}\r\n.bg-red-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(119 29 29 / var(--tw-bg-opacity));\n}\r\n.bg-teal-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 148 162 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-white\\/30 {\n  background-color: rgb(255 255 255 / 0.3);\n}\r\n.bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 246 178 / var(--tw-bg-opacity));\n}\r\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 202 21 / var(--tw-bg-opacity));\n}\r\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(227 160 8 / var(--tw-bg-opacity));\n}\r\n.bg-yellow-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 253 234 / var(--tw-bg-opacity));\n}\r\n.bg-yellow-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 120 3 / var(--tw-bg-opacity));\n}\r\n.bg-yellow-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(159 88 10 / var(--tw-bg-opacity));\n}\r\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\r\n.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}\r\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.from-blue-500 {\n  --tw-gradient-from: #3F83F8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(63 131 248 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-cyan-400 {\n  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-cyan-500 {\n  --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-green-400 {\n  --tw-gradient-from: #31C48D var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(49 196 141 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-lime-200 {\n  --tw-gradient-from: #d9f99d var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(217 249 157 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-pink-400 {\n  --tw-gradient-from: #F17EB8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(241 126 184 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-pink-500 {\n  --tw-gradient-from: #E74694 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(231 70 148 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-purple-500 {\n  --tw-gradient-from: #9061F9 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(144 97 249 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-purple-600 {\n  --tw-gradient-from: #7E3AF2 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(126 58 242 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-red-200 {\n  --tw-gradient-from: #FBD5D5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(251 213 213 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-red-400 {\n  --tw-gradient-from: #F98080 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 128 128 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-sky-400 {\n  --tw-gradient-from: #38bdf8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(56 189 248 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-teal-200 {\n  --tw-gradient-from: #AFECEF var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(175 236 239 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-teal-400 {\n  --tw-gradient-from: #16BDCA var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(22 189 202 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.via-blue-600 {\n  --tw-gradient-to: rgb(28 100 242 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-cyan-500 {\n  --tw-gradient-to: rgb(6 182 212 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-green-500 {\n  --tw-gradient-to: rgb(14 159 110 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-lime-400 {\n  --tw-gradient-to: rgb(163 230 53 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #a3e635 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-pink-500 {\n  --tw-gradient-to: rgb(231 70 148 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #E74694 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-purple-600 {\n  --tw-gradient-to: rgb(126 58 242 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-red-300 {\n  --tw-gradient-to: rgb(248 180 180 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-red-500 {\n  --tw-gradient-to: rgb(240 82 82 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #F05252 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-teal-500 {\n  --tw-gradient-to: rgb(6 148 162 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #0694A2 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.to-blue-500 {\n  --tw-gradient-to: #3F83F8 var(--tw-gradient-to-position);\n}\r\n.to-blue-600 {\n  --tw-gradient-to: #1C64F2 var(--tw-gradient-to-position);\n}\r\n.to-blue-700 {\n  --tw-gradient-to: #1A56DB var(--tw-gradient-to-position);\n}\r\n.to-cyan-600 {\n  --tw-gradient-to: #0891b2 var(--tw-gradient-to-position);\n}\r\n.to-emerald-600 {\n  --tw-gradient-to: #059669 var(--tw-gradient-to-position);\n}\r\n.to-green-600 {\n  --tw-gradient-to: #057A55 var(--tw-gradient-to-position);\n}\r\n.to-lime-200 {\n  --tw-gradient-to: #d9f99d var(--tw-gradient-to-position);\n}\r\n.to-lime-500 {\n  --tw-gradient-to: #84cc16 var(--tw-gradient-to-position);\n}\r\n.to-orange-400 {\n  --tw-gradient-to: #FF8A4C var(--tw-gradient-to-position);\n}\r\n.to-pink-500 {\n  --tw-gradient-to: #E74694 var(--tw-gradient-to-position);\n}\r\n.to-pink-600 {\n  --tw-gradient-to: #D61F69 var(--tw-gradient-to-position);\n}\r\n.to-purple-700 {\n  --tw-gradient-to: #6C2BD9 var(--tw-gradient-to-position);\n}\r\n.to-red-600 {\n  --tw-gradient-to: #E02424 var(--tw-gradient-to-position);\n}\r\n.to-teal-600 {\n  --tw-gradient-to: #047481 var(--tw-gradient-to-position);\n}\r\n.to-yellow-200 {\n  --tw-gradient-to: #FCE96A var(--tw-gradient-to-position);\n}\r\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\r\n.fill-blue-600 {\n  fill: #1C64F2;\n}\r\n.fill-gray-600 {\n  fill: #4B5563;\n}\r\n.fill-green-500 {\n  fill: #0E9F6E;\n}\r\n.fill-pink-600 {\n  fill: #D61F69;\n}\r\n.fill-primary-600 {\n  fill: #EF562F;\n}\r\n.fill-purple-600 {\n  fill: #7E3AF2;\n}\r\n.fill-red-600 {\n  fill: #E02424;\n}\r\n.fill-white {\n  fill: #ffffff;\n}\r\n.fill-yellow-400 {\n  fill: #E3A008;\n}\r\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\r\n.\\!p-0 {\n  padding: 0px !important;\n}\r\n.\\!p-2 {\n  padding: 0.5rem !important;\n}\r\n.\\!p-3 {\n  padding: 0.75rem !important;\n}\r\n.p-0 {\n  padding: 0px;\n}\r\n.p-0\\.5 {\n  padding: 0.125rem;\n}\r\n.p-1 {\n  padding: 0.25rem;\n}\r\n.p-1\\.5 {\n  padding: 0.375rem;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-2\\.5 {\n  padding: 0.625rem;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.p-5 {\n  padding: 1.25rem;\n}\r\n.p-6 {\n  padding: 1.5rem;\n}\r\n.\\!px-0 {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\r\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\r\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.py-3\\.5 {\n  padding-top: 0.875rem;\n  padding-bottom: 0.875rem;\n}\r\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\r\n.pb-1\\.5 {\n  padding-bottom: 0.375rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pb-2\\.5 {\n  padding-bottom: 0.625rem;\n}\r\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\r\n.pl-10 {\n  padding-left: 2.5rem;\n}\r\n.pl-11 {\n  padding-left: 2.75rem;\n}\r\n.pl-2 {\n  padding-left: 0.5rem;\n}\r\n.pl-2\\.5 {\n  padding-left: 0.625rem;\n}\r\n.pl-3 {\n  padding-left: 0.75rem;\n}\r\n.pl-4 {\n  padding-left: 1rem;\n}\r\n.pl-9 {\n  padding-left: 2.25rem;\n}\r\n.pr-10 {\n  padding-right: 2.5rem;\n}\r\n.pr-11 {\n  padding-right: 2.75rem;\n}\r\n.pr-2 {\n  padding-right: 0.5rem;\n}\r\n.pr-2\\.5 {\n  padding-right: 0.625rem;\n}\r\n.pr-3 {\n  padding-right: 0.75rem;\n}\r\n.pr-4 {\n  padding-right: 1rem;\n}\r\n.pr-9 {\n  padding-right: 2.25rem;\n}\r\n.pt-3 {\n  padding-top: 0.75rem;\n}\r\n.pt-4 {\n  padding-top: 1rem;\n}\r\n.pt-5 {\n  padding-top: 1.25rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-right {\n  text-align: right;\n}\r\n.text-justify {\n  text-align: justify;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\r\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\r\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\r\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\r\n.text-8xl {\n  font-size: 6rem;\n  line-height: 1;\n}\r\n.text-9xl {\n  font-size: 8rem;\n  line-height: 1;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-black {\n  font-weight: 900;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-extrabold {\n  font-weight: 800;\n}\r\n.font-extralight {\n  font-weight: 200;\n}\r\n.font-light {\n  font-weight: 300;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.font-thin {\n  font-weight: 100;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.lowercase {\n  text-transform: lowercase;\n}\r\n.italic {\n  font-style: italic;\n}\r\n.leading-loose {\n  line-height: 2;\n}\r\n.leading-none {\n  line-height: 1;\n}\r\n.leading-normal {\n  line-height: 1.5;\n}\r\n.leading-relaxed {\n  line-height: 1.625;\n}\r\n.leading-tight {\n  line-height: 1.25;\n}\r\n.tracking-normal {\n  letter-spacing: 0em;\n}\r\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\r\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\r\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\r\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\r\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\r\n.\\!text-gray-900 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;\n}\r\n.text-blue-100 {\n  --tw-text-opacity: 1;\n  color: rgb(225 239 254 / var(--tw-text-opacity));\n}\r\n.text-blue-400 {\n  --tw-text-opacity: 1;\n  color: rgb(118 169 250 / var(--tw-text-opacity));\n}\r\n.text-blue-50 {\n  --tw-text-opacity: 1;\n  color: rgb(235 245 255 / var(--tw-text-opacity));\n}\r\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(63 131 248 / var(--tw-text-opacity));\n}\r\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(28 100 242 / var(--tw-text-opacity));\n}\r\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(26 86 219 / var(--tw-text-opacity));\n}\r\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 66 159 / var(--tw-text-opacity));\n}\r\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\r\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\r\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\r\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n.text-green-100 {\n  --tw-text-opacity: 1;\n  color: rgb(222 247 236 / var(--tw-text-opacity));\n}\r\n.text-green-400 {\n  --tw-text-opacity: 1;\n  color: rgb(49 196 141 / var(--tw-text-opacity));\n}\r\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(14 159 110 / var(--tw-text-opacity));\n}\r\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(5 122 85 / var(--tw-text-opacity));\n}\r\n.text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgb(4 108 78 / var(--tw-text-opacity));\n}\r\n.text-green-800 {\n  --tw-text-opacity: 1;\n  color: rgb(3 84 63 / var(--tw-text-opacity));\n}\r\n.text-green-900 {\n  --tw-text-opacity: 1;\n  color: rgb(1 71 55 / var(--tw-text-opacity));\n}\r\n.text-indigo-100 {\n  --tw-text-opacity: 1;\n  color: rgb(229 237 255 / var(--tw-text-opacity));\n}\r\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(141 162 251 / var(--tw-text-opacity));\n}\r\n.text-indigo-500 {\n  --tw-text-opacity: 1;\n  color: rgb(104 117 245 / var(--tw-text-opacity));\n}\r\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgb(66 56 157 / var(--tw-text-opacity));\n}\r\n.text-orange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(255 90 31 / var(--tw-text-opacity));\n}\r\n.text-orange-800 {\n  --tw-text-opacity: 1;\n  color: rgb(138 44 13 / var(--tw-text-opacity));\n}\r\n.text-pink-100 {\n  --tw-text-opacity: 1;\n  color: rgb(252 232 243 / var(--tw-text-opacity));\n}\r\n.text-pink-400 {\n  --tw-text-opacity: 1;\n  color: rgb(241 126 184 / var(--tw-text-opacity));\n}\r\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(231 70 148 / var(--tw-text-opacity));\n}\r\n.text-pink-800 {\n  --tw-text-opacity: 1;\n  color: rgb(153 21 75 / var(--tw-text-opacity));\n}\r\n.text-primary-100 {\n  --tw-text-opacity: 1;\n  color: rgb(255 241 238 / var(--tw-text-opacity));\n}\r\n.text-primary-400 {\n  --tw-text-opacity: 1;\n  color: rgb(255 188 173 / var(--tw-text-opacity));\n}\r\n.text-primary-500 {\n  --tw-text-opacity: 1;\n  color: rgb(254 121 93 / var(--tw-text-opacity));\n}\r\n.text-primary-600 {\n  --tw-text-opacity: 1;\n  color: rgb(239 86 47 / var(--tw-text-opacity));\n}\r\n.text-primary-700 {\n  --tw-text-opacity: 1;\n  color: rgb(235 79 39 / var(--tw-text-opacity));\n}\r\n.text-primary-800 {\n  --tw-text-opacity: 1;\n  color: rgb(204 69 34 / var(--tw-text-opacity));\n}\r\n.text-primary-900 {\n  --tw-text-opacity: 1;\n  color: rgb(165 55 27 / var(--tw-text-opacity));\n}\r\n.text-purple-100 {\n  --tw-text-opacity: 1;\n  color: rgb(237 235 254 / var(--tw-text-opacity));\n}\r\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(172 148 250 / var(--tw-text-opacity));\n}\r\n.text-purple-500 {\n  --tw-text-opacity: 1;\n  color: rgb(144 97 249 / var(--tw-text-opacity));\n}\r\n.text-purple-600 {\n  --tw-text-opacity: 1;\n  color: rgb(126 58 242 / var(--tw-text-opacity));\n}\r\n.text-purple-700 {\n  --tw-text-opacity: 1;\n  color: rgb(108 43 217 / var(--tw-text-opacity));\n}\r\n.text-purple-800 {\n  --tw-text-opacity: 1;\n  color: rgb(85 33 181 / var(--tw-text-opacity));\n}\r\n.text-red-100 {\n  --tw-text-opacity: 1;\n  color: rgb(253 232 232 / var(--tw-text-opacity));\n}\r\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(249 128 128 / var(--tw-text-opacity));\n}\r\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(240 82 82 / var(--tw-text-opacity));\n}\r\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(224 36 36 / var(--tw-text-opacity));\n}\r\n.text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(200 30 30 / var(--tw-text-opacity));\n}\r\n.text-red-800 {\n  --tw-text-opacity: 1;\n  color: rgb(155 28 28 / var(--tw-text-opacity));\n}\r\n.text-red-900 {\n  --tw-text-opacity: 1;\n  color: rgb(119 29 29 / var(--tw-text-opacity));\n}\r\n.text-teal-600 {\n  --tw-text-opacity: 1;\n  color: rgb(4 116 129 / var(--tw-text-opacity));\n}\r\n.text-transparent {\n  color: transparent;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-yellow-100 {\n  --tw-text-opacity: 1;\n  color: rgb(253 246 178 / var(--tw-text-opacity));\n}\r\n.text-yellow-400 {\n  --tw-text-opacity: 1;\n  color: rgb(227 160 8 / var(--tw-text-opacity));\n}\r\n.text-yellow-500 {\n  --tw-text-opacity: 1;\n  color: rgb(194 120 3 / var(--tw-text-opacity));\n}\r\n.text-yellow-800 {\n  --tw-text-opacity: 1;\n  color: rgb(114 59 19 / var(--tw-text-opacity));\n}\r\n.underline {\n  text-decoration-line: underline;\n}\r\n.line-through {\n  text-decoration-line: line-through;\n}\r\n.decoration-blue-400 {\n  text-decoration-color: #76A9FA;\n}\r\n.decoration-solid {\n  text-decoration-style: solid;\n}\r\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\r\n.underline-offset-2 {\n  text-underline-offset: 2px;\n}\r\n.placeholder-green-700::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(4 108 78 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-green-700::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(4 108 78 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-red-700::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(200 30 30 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-red-700::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(200 30 30 / var(--tw-placeholder-opacity));\n}\r\n.opacity-30 {\n  opacity: 0.3;\n}\r\n.opacity-40 {\n  opacity: 0.4;\n}\r\n.opacity-50 {\n  opacity: 0.5;\n}\r\n.opacity-60 {\n  opacity: 0.6;\n}\r\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-blue-500\\/50 {\n  --tw-shadow-color: rgb(63 131 248 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-cyan-500\\/50 {\n  --tw-shadow-color: rgb(6 182 212 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-gray-500\\/50 {\n  --tw-shadow-color: rgb(107 114 128 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-green-500\\/50 {\n  --tw-shadow-color: rgb(14 159 110 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-lime-500\\/50 {\n  --tw-shadow-color: rgb(132 204 22 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-pink-500\\/50 {\n  --tw-shadow-color: rgb(231 70 148 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-primary-500\\/50 {\n  --tw-shadow-color: rgb(254 121 93 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-purple-500\\/50 {\n  --tw-shadow-color: rgb(144 97 249 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-red-500\\/50 {\n  --tw-shadow-color: rgb(240 82 82 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-teal-500\\/50 {\n  --tw-shadow-color: rgb(6 148 162 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-yellow-500\\/50 {\n  --tw-shadow-color: rgb(194 120 3 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.outline {\n  outline-style: solid;\n}\r\n.ring-0 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-2 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-8 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-gray-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\r\n.ring-primary-500 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));\n}\r\n.ring-white {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\r\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.duration-75 {\n  transition-duration: 75ms;\n}\r\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\r\n.first-letter\\:float-left::first-letter {\n  float: left;\n}\r\n.first-letter\\:mr-3::first-letter {\n  margin-right: 0.75rem;\n}\r\n.first-letter\\:text-7xl::first-letter {\n  font-size: 4.5rem;\n  line-height: 1;\n}\r\n.first-letter\\:font-bold::first-letter {\n  font-weight: 700;\n}\r\n.first-letter\\:text-gray-900::first-letter {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n.first-line\\:uppercase::first-line {\n  text-transform: uppercase;\n}\r\n.first-line\\:tracking-widest::first-line {\n  letter-spacing: 0.1em;\n}\r\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\r\n.after\\:left-\\[2px\\]::after {\n  content: var(--tw-content);\n  left: 2px;\n}\r\n.after\\:left-\\[4px\\]::after {\n  content: var(--tw-content);\n  left: 4px;\n}\r\n.after\\:top-0::after {\n  content: var(--tw-content);\n  top: 0px;\n}\r\n.after\\:top-0\\.5::after {\n  content: var(--tw-content);\n  top: 0.125rem;\n}\r\n.after\\:top-\\[2px\\]::after {\n  content: var(--tw-content);\n  top: 2px;\n}\r\n.after\\:h-4::after {\n  content: var(--tw-content);\n  height: 1rem;\n}\r\n.after\\:h-5::after {\n  content: var(--tw-content);\n  height: 1.25rem;\n}\r\n.after\\:h-6::after {\n  content: var(--tw-content);\n  height: 1.5rem;\n}\r\n.after\\:w-4::after {\n  content: var(--tw-content);\n  width: 1rem;\n}\r\n.after\\:w-5::after {\n  content: var(--tw-content);\n  width: 1.25rem;\n}\r\n.after\\:w-6::after {\n  content: var(--tw-content);\n  width: 1.5rem;\n}\r\n.after\\:rounded-full::after {\n  content: var(--tw-content);\n  border-radius: 9999px;\n}\r\n.after\\:border::after {\n  content: var(--tw-content);\n  border-width: 1px;\n}\r\n.after\\:border-gray-300::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\r\n.after\\:bg-white::after {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.after\\:transition-all::after {\n  content: var(--tw-content);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.after\\:content-\\[\\'\\'\\]::after {\n  --tw-content: '';\n  content: var(--tw-content);\n}\r\n.first\\:rounded-l-full:first-child {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\r\n.first\\:rounded-l-lg:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\r\n.first\\:rounded-t-lg:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\r\n.first\\:border-l:first-child {\n  border-left-width: 1px;\n}\r\n.last\\:mr-0:last-child {\n  margin-right: 0px;\n}\r\n.last\\:rounded-b-lg:last-child {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\r\n.last\\:rounded-r-full:last-child {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\r\n.last\\:rounded-r-lg:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\r\n.last\\:border-b-0:last-child {\n  border-bottom-width: 0px;\n}\r\n.last\\:border-r:last-child {\n  border-right-width: 1px;\n}\r\n.odd\\:bg-blue-800:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 66 159 / var(--tw-bg-opacity));\n}\r\n.odd\\:bg-green-800:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 84 63 / var(--tw-bg-opacity));\n}\r\n.odd\\:bg-purple-800:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 33 181 / var(--tw-bg-opacity));\n}\r\n.odd\\:bg-red-800:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(155 28 28 / var(--tw-bg-opacity));\n}\r\n.odd\\:bg-white:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.odd\\:bg-yellow-800:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(114 59 19 / var(--tw-bg-opacity));\n}\r\n.even\\:bg-blue-700:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 86 219 / var(--tw-bg-opacity));\n}\r\n.even\\:bg-gray-50:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\r\n.even\\:bg-green-700:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 108 78 / var(--tw-bg-opacity));\n}\r\n.even\\:bg-purple-700:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(108 43 217 / var(--tw-bg-opacity));\n}\r\n.even\\:bg-red-700:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(200 30 30 / var(--tw-bg-opacity));\n}\r\n.even\\:bg-yellow-700:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(142 75 16 / var(--tw-bg-opacity));\n}\r\n.focus-within\\:border-primary-500:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-border-opacity));\n}\r\n.focus-within\\:ring-1:focus-within {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.hover\\:border-gray-300:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\r\n.hover\\:bg-blue-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(225 239 254 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-blue-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(195 221 253 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-blue-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(118 169 250 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-blue-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 66 159 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-900:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-green-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(188 240 218 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-green-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(49 196 141 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-green-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 84 63 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-indigo-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(205 219 254 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-pink-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 209 232 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-primary-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 228 222 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-primary-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 79 39 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-primary-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(204 69 34 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-purple-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 215 254 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-purple-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(172 148 250 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-purple-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 33 181 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-red-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 213 213 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-red-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 128 128 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-red-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(155 28 28 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\r\n.hover\\:bg-yellow-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 233 106 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-yellow-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(227 160 8 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-yellow-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 120 3 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 86 219 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gradient-to-bl:hover {\n  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));\n}\r\n.hover\\:bg-gradient-to-br:hover {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n.hover\\:bg-gradient-to-l:hover {\n  background-image: linear-gradient(to left, var(--tw-gradient-stops));\n}\r\n.hover\\:\\!text-inherit:hover {\n  color: inherit !important;\n}\r\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(28 100 242 / var(--tw-text-opacity));\n}\r\n.hover\\:text-blue-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(26 86 219 / var(--tw-text-opacity));\n}\r\n.hover\\:text-blue-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(35 56 118 / var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n.hover\\:text-green-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(1 71 55 / var(--tw-text-opacity));\n}\r\n.hover\\:text-indigo-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(54 47 120 / var(--tw-text-opacity));\n}\r\n.hover\\:text-pink-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(117 26 61 / var(--tw-text-opacity));\n}\r\n.hover\\:text-primary-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(235 79 39 / var(--tw-text-opacity));\n}\r\n.hover\\:text-primary-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(204 69 34 / var(--tw-text-opacity));\n}\r\n.hover\\:text-primary-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(165 55 27 / var(--tw-text-opacity));\n}\r\n.hover\\:text-purple-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(74 29 150 / var(--tw-text-opacity));\n}\r\n.hover\\:text-red-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(119 29 29 / var(--tw-text-opacity));\n}\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.hover\\:text-yellow-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(99 49 18 / var(--tw-text-opacity));\n}\r\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\r\n.hover\\:no-underline:hover {\n  text-decoration-line: none;\n}\r\n.focus\\:z-10:focus {\n  z-index: 10;\n}\r\n.focus\\:z-40:focus {\n  z-index: 40;\n}\r\n.focus\\:border-blue-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 131 248 / var(--tw-border-opacity));\n}\r\n.focus\\:border-gray-200:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n.focus\\:border-green-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 159 110 / var(--tw-border-opacity));\n}\r\n.focus\\:border-green-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(5 122 85 / var(--tw-border-opacity));\n}\r\n.focus\\:border-primary-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-border-opacity));\n}\r\n.focus\\:border-primary-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 86 47 / var(--tw-border-opacity));\n}\r\n.focus\\:border-red-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(240 82 82 / var(--tw-border-opacity));\n}\r\n.focus\\:border-red-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(224 36 36 / var(--tw-border-opacity));\n}\r\n.focus\\:border-indigo-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(104 117 245 / var(--tw-border-opacity));\n}\r\n.focus\\:bg-gray-900:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n.focus\\:text-blue-700:focus {\n  --tw-text-opacity: 1;\n  color: rgb(26 86 219 / var(--tw-text-opacity));\n}\r\n.focus\\:text-primary-700:focus {\n  --tw-text-opacity: 1;\n  color: rgb(235 79 39 / var(--tw-text-opacity));\n}\r\n.focus\\:text-white:focus {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.focus\\:\\!ring-gray-300:focus {\n  --tw-ring-opacity: 1 !important;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)) !important;\n}\r\n.focus\\:ring-blue-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-blue-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-cyan-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-gray-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-gray-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-gray-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-green-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-green-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-green-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-green-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-indigo-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-lime-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-lime-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-orange-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-pink-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-pink-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-pink-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-primary-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 213 204 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-primary-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 188 173 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-primary-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-primary-700:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(235 79 39 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-purple-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-purple-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-purple-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-purple-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-red-100:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-red-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-red-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-red-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-teal-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-teal-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-yellow-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-yellow-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-yellow-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));\n}\r\n.focus\\:ring-indigo-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(104 117 245 / var(--tw-ring-opacity));\n}\r\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\r\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\r\n.group:first-child .group-first\\:rounded-l-lg {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\r\n.group:first-child .group-first\\:rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\r\n.group:first-child .group-first\\:border-t {\n  border-top-width: 1px;\n}\r\n.group:last-child .group-last\\:rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\r\n.group:hover .group-hover\\:rotate-45 {\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.group:hover .group-hover\\:bg-white\\/50 {\n  background-color: rgb(255 255 255 / 0.5);\n}\r\n.group:hover .group-hover\\:\\!bg-opacity-0 {\n  --tw-bg-opacity: 0 !important;\n}\r\n.group:hover .group-hover\\:\\!text-inherit {\n  color: inherit !important;\n}\r\n.group:hover .group-hover\\:text-primary-600 {\n  --tw-text-opacity: 1;\n  color: rgb(239 86 47 / var(--tw-text-opacity));\n}\r\n.group:focus .group-focus\\:outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.group:focus .group-focus\\:ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.group:focus .group-focus\\:ring-white {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 100 242 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 122 85 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-orange-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 90 31 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-primary-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 86 47 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(126 58 242 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 36 36 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-teal-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 116 129 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(227 160 8 / var(--tw-bg-opacity));\n}\r\n.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {\n  content: var(--tw-content);\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:checked ~ .peer-checked\\:after\\:border-white::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {\n  top: 50%;\n}\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {\n  top: 50%;\n}\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:focus ~ .peer-focus\\:left-0 {\n  left: 0px;\n}\r\n.peer:focus ~ .peer-focus\\:top-2 {\n  top: 0.5rem;\n}\r\n.peer:focus ~ .peer-focus\\:-translate-y-4 {\n  --tw-translate-y: -1rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:focus ~ .peer-focus\\:-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:focus ~ .peer-focus\\:scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.peer:focus ~ .peer-focus\\:px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.peer:focus ~ .peer-focus\\:text-primary-600 {\n  --tw-text-opacity: 1;\n  color: rgb(239 86 47 / var(--tw-text-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.peer:focus ~ .peer-focus\\:ring-blue-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-green-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-orange-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-primary-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 213 204 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-purple-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-red-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-teal-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));\n}\r\n.peer:focus ~ .peer-focus\\:ring-yellow-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:block) {\n  display: block;\n}\r\n:is(.dark .dark\\:hidden) {\n  display: none;\n}\r\n:is(.dark .dark\\:divide-blue-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(26 86 219 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-blue-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(30 66 159 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-gray-600) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-gray-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-gray-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-green-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(4 108 78 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-green-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(3 84 63 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-indigo-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(81 69 205 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-indigo-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(66 56 157 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-orange-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(138 44 13 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-pink-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(191 18 93 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-pink-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(153 21 75 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-primary-200) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(255 228 222 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-purple-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(108 43 217 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-purple-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(85 33 181 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-red-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(200 30 30 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-red-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(155 28 28 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-yellow-700) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(142 75 16 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:divide-yellow-800) > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(114 59 19 / var(--tw-divide-opacity));\n}\r\n:is(.dark .dark\\:\\!border-gray-600) {\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity)) !important;\n}\r\n:is(.dark .dark\\:border-blue-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(118 169 250 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-blue-500) {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 131 248 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-blue-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 66 159 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-gray-500) {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-gray-600) {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-gray-700) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-gray-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-gray-900) {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-green-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(49 196 141 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-green-500) {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 159 110 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-green-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(3 84 63 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-indigo-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(141 162 251 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-indigo-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(66 56 157 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-orange-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(138 44 13 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-pink-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(241 126 184 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-pink-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 21 75 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-primary-200) {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 228 222 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-primary-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 188 173 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-primary-500) {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-purple-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(172 148 250 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-purple-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(85 33 181 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-red-400) {\n  --tw-border-opacity: 1;\n  border-color: rgb(249 128 128 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-red-500) {\n  --tw-border-opacity: 1;\n  border-color: rgb(240 82 82 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-red-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(155 28 28 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-white) {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-yellow-300) {\n  --tw-border-opacity: 1;\n  border-color: rgb(250 202 21 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-yellow-800) {\n  --tw-border-opacity: 1;\n  border-color: rgb(114 59 19 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-r-gray-600) {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:border-r-gray-700) {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:bg-blue-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(118 169 250 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-blue-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 131 248 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-blue-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 100 242 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-blue-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 66 159 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-blue-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(35 56 118 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-200) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-300) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-700) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-gray-800\\/30) {\n  background-color: rgb(31 41 55 / 0.3);\n}\r\n:is(.dark .dark\\:bg-gray-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-green-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(49 196 141 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-green-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 159 110 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-green-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 122 85 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-green-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 84 63 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-green-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 71 55 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-indigo-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(141 162 251 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-indigo-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(104 117 245 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-indigo-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(66 56 157 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-indigo-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(54 47 120 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-inherit) {\n  background-color: inherit;\n}\r\n:is(.dark .dark\\:bg-orange-700) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(180 52 3 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-orange-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(138 44 13 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-pink-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 126 184 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-pink-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(117 26 61 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-primary-200) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 228 222 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-primary-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 188 173 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-primary-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 121 93 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-primary-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 86 47 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-primary-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(204 69 34 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-primary-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(165 55 27 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-purple-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(172 148 250 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-purple-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 97 249 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-purple-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(126 58 242 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-purple-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 33 181 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-purple-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 29 150 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-red-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 82 82 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-red-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 36 36 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-red-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(155 28 28 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-red-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(119 29 29 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-transparent) {\n  background-color: transparent;\n}\r\n:is(.dark .dark\\:bg-yellow-400) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(227 160 8 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-yellow-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(159 88 10 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-yellow-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(114 59 19 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-yellow-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 49 18 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:bg-opacity-80) {\n  --tw-bg-opacity: 0.8;\n}\r\n:is(.dark .dark\\:fill-gray-300) {\n  fill: #D1D5DB;\n}\r\n:is(.dark .dark\\:\\!text-white) {\n  --tw-text-opacity: 1 !important;\n  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;\n}\r\n:is(.dark .dark\\:text-blue-100) {\n  --tw-text-opacity: 1;\n  color: rgb(225 239 254 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-blue-200) {\n  --tw-text-opacity: 1;\n  color: rgb(195 221 253 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-blue-300) {\n  --tw-text-opacity: 1;\n  color: rgb(164 202 254 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-blue-400) {\n  --tw-text-opacity: 1;\n  color: rgb(118 169 250 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-blue-500) {\n  --tw-text-opacity: 1;\n  color: rgb(63 131 248 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-100) {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-200) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-300) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-400) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-500) {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-600) {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-700) {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-gray-900) {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-green-100) {\n  --tw-text-opacity: 1;\n  color: rgb(222 247 236 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-green-200) {\n  --tw-text-opacity: 1;\n  color: rgb(188 240 218 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-green-300) {\n  --tw-text-opacity: 1;\n  color: rgb(132 225 188 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-green-400) {\n  --tw-text-opacity: 1;\n  color: rgb(49 196 141 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-green-500) {\n  --tw-text-opacity: 1;\n  color: rgb(14 159 110 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-indigo-100) {\n  --tw-text-opacity: 1;\n  color: rgb(229 237 255 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-indigo-200) {\n  --tw-text-opacity: 1;\n  color: rgb(205 219 254 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-indigo-300) {\n  --tw-text-opacity: 1;\n  color: rgb(180 198 252 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-indigo-400) {\n  --tw-text-opacity: 1;\n  color: rgb(141 162 251 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-orange-200) {\n  --tw-text-opacity: 1;\n  color: rgb(252 217 189 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-orange-400) {\n  --tw-text-opacity: 1;\n  color: rgb(255 138 76 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-pink-100) {\n  --tw-text-opacity: 1;\n  color: rgb(252 232 243 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-pink-300) {\n  --tw-text-opacity: 1;\n  color: rgb(248 180 217 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-pink-400) {\n  --tw-text-opacity: 1;\n  color: rgb(241 126 184 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-200) {\n  --tw-text-opacity: 1;\n  color: rgb(255 228 222 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-300) {\n  --tw-text-opacity: 1;\n  color: rgb(255 213 204 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-400) {\n  --tw-text-opacity: 1;\n  color: rgb(255 188 173 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-500) {\n  --tw-text-opacity: 1;\n  color: rgb(254 121 93 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-700) {\n  --tw-text-opacity: 1;\n  color: rgb(235 79 39 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-800) {\n  --tw-text-opacity: 1;\n  color: rgb(204 69 34 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-primary-900) {\n  --tw-text-opacity: 1;\n  color: rgb(165 55 27 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-purple-100) {\n  --tw-text-opacity: 1;\n  color: rgb(237 235 254 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-purple-200) {\n  --tw-text-opacity: 1;\n  color: rgb(220 215 254 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-purple-300) {\n  --tw-text-opacity: 1;\n  color: rgb(202 191 253 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-purple-400) {\n  --tw-text-opacity: 1;\n  color: rgb(172 148 250 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-red-100) {\n  --tw-text-opacity: 1;\n  color: rgb(253 232 232 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-red-200) {\n  --tw-text-opacity: 1;\n  color: rgb(251 213 213 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-red-300) {\n  --tw-text-opacity: 1;\n  color: rgb(248 180 180 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-red-400) {\n  --tw-text-opacity: 1;\n  color: rgb(249 128 128 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-red-500) {\n  --tw-text-opacity: 1;\n  color: rgb(240 82 82 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-white) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-yellow-100) {\n  --tw-text-opacity: 1;\n  color: rgb(253 246 178 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-yellow-200) {\n  --tw-text-opacity: 1;\n  color: rgb(252 233 106 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:text-yellow-300) {\n  --tw-text-opacity: 1;\n  color: rgb(250 202 21 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:decoration-blue-600) {\n  text-decoration-color: #1C64F2;\n}\r\n:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n}\r\n:is(.dark .dark\\:placeholder-gray-400)::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n}\r\n:is(.dark .dark\\:placeholder-green-500)::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(14 159 110 / var(--tw-placeholder-opacity));\n}\r\n:is(.dark .dark\\:placeholder-green-500)::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(14 159 110 / var(--tw-placeholder-opacity));\n}\r\n:is(.dark .dark\\:placeholder-red-500)::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(240 82 82 / var(--tw-placeholder-opacity));\n}\r\n:is(.dark .dark\\:placeholder-red-500)::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(240 82 82 / var(--tw-placeholder-opacity));\n}\r\n:is(.dark .dark\\:opacity-25) {\n  opacity: 0.25;\n}\r\n:is(.dark .dark\\:shadow-blue-800\\/80) {\n  --tw-shadow-color: rgb(30 66 159 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-cyan-800\\/80) {\n  --tw-shadow-color: rgb(21 94 117 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-gray-800\\/80) {\n  --tw-shadow-color: rgb(31 41 55 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-green-800\\/80) {\n  --tw-shadow-color: rgb(3 84 63 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-lime-800\\/80) {\n  --tw-shadow-color: rgb(63 98 18 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-pink-800\\/80) {\n  --tw-shadow-color: rgb(153 21 75 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-primary-800\\/80) {\n  --tw-shadow-color: rgb(204 69 34 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-purple-800\\/80) {\n  --tw-shadow-color: rgb(85 33 181 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-red-800\\/80) {\n  --tw-shadow-color: rgb(155 28 28 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-teal-800\\/80) {\n  --tw-shadow-color: rgb(5 80 92 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:shadow-yellow-800\\/80) {\n  --tw-shadow-color: rgb(114 59 19 / 0.8);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n:is(.dark .dark\\:ring-gray-500) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:ring-gray-900) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:ring-primary-500) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:ring-offset-gray-800) {\n  --tw-ring-offset-color: #1F2937;\n}\r\n:is(.dark .dark\\:first-letter\\:text-gray-100)::first-letter {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:last\\:border-r-gray-500:last-child) {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:last\\:border-r-gray-600:last-child) {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n:is(.dark .odd\\:dark\\:bg-blue-800):nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 66 159 / var(--tw-bg-opacity));\n}\r\n:is(.dark .odd\\:dark\\:bg-gray-800):nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n:is(.dark .odd\\:dark\\:bg-green-800):nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 84 63 / var(--tw-bg-opacity));\n}\r\n:is(.dark .odd\\:dark\\:bg-purple-800):nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 33 181 / var(--tw-bg-opacity));\n}\r\n:is(.dark .odd\\:dark\\:bg-red-800):nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(155 28 28 / var(--tw-bg-opacity));\n}\r\n:is(.dark .odd\\:dark\\:bg-yellow-800):nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(114 59 19 / var(--tw-bg-opacity));\n}\r\n:is(.dark .even\\:dark\\:bg-blue-700):nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 86 219 / var(--tw-bg-opacity));\n}\r\n:is(.dark .even\\:dark\\:bg-gray-700):nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n:is(.dark .even\\:dark\\:bg-green-700):nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 108 78 / var(--tw-bg-opacity));\n}\r\n:is(.dark .even\\:dark\\:bg-purple-700):nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(108 43 217 / var(--tw-bg-opacity));\n}\r\n:is(.dark .even\\:dark\\:bg-red-700):nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(200 30 30 / var(--tw-bg-opacity));\n}\r\n:is(.dark .even\\:dark\\:bg-yellow-700):nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(142 75 16 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:focus-within\\:border-primary-500:focus-within) {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:hover\\:border-gray-500:hover) {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:hover\\:border-gray-600:hover) {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:hover\\:border-gray-700:hover) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-blue-600:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 100 242 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-blue-700:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 86 219 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-blue-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 66 159 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-gray-600:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-gray-700:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-gray-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-green-600:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 122 85 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-green-700:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 108 78 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-green-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 84 63 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-indigo-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(66 56 157 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-pink-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(153 21 75 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-primary-600:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 86 47 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-primary-700:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 79 39 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-primary-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(204 69 34 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-purple-500:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 97 249 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-purple-700:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(108 43 217 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-purple-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 33 181 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-red-600:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 36 36 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-red-700:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(200 30 30 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-red-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(155 28 28 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-yellow-400:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(227 160 8 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:bg-yellow-800:hover) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(114 59 19 / var(--tw-bg-opacity));\n}\r\n:is(.dark .hover\\:dark\\:bg-gray-800):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-blue-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(164 202 254 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-blue-500:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(63 131 248 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-gray-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-green-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(132 225 188 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-indigo-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(180 198 252 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-pink-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(248 180 217 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-primary-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(255 213 204 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-primary-900:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(165 55 27 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-purple-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(202 191 253 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-red-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(248 180 180 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-white:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:hover\\:text-yellow-300:hover) {\n  --tw-text-opacity: 1;\n  color: rgb(250 202 21 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:focus\\:border-blue-500:focus) {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 131 248 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:focus\\:border-green-500:focus) {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 159 110 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:focus\\:border-primary-500:focus) {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 121 93 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:focus\\:border-red-500:focus) {\n  --tw-border-opacity: 1;\n  border-color: rgb(240 82 82 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:focus\\:border-gray-600:focus) {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n:is(.dark .dark\\:focus\\:text-white:focus) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-blue-500:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-blue-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-blue-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-cyan-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-gray-500:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-gray-700:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-gray-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-green-500:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-green-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-green-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-lime-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-orange-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-pink-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-primary-500:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-primary-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(239 86 47 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-primary-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(204 69 34 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-purple-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-purple-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-purple-900:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-red-400:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-red-500:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-red-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-red-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-red-900:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-teal-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-teal-700:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-teal-800:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-yellow-600:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));\n}\r\n:is(.dark .dark\\:focus\\:ring-yellow-900:focus) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));\n}\r\n:is(.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60) {\n  background-color: rgb(31 41 55 / 0.6);\n}\r\n:is(.dark .group:hover .dark\\:group-hover\\:text-primary-500) {\n  --tw-text-opacity: 1;\n  color: rgb(254 121 93 / var(--tw-text-opacity));\n}\r\n:is(.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70) {\n  --tw-ring-color: rgb(31 41 55 / 0.7);\n}\r\n.peer:focus ~ :is(.dark .peer-focus\\:dark\\:text-primary-500) {\n  --tw-text-opacity: 1;\n  color: rgb(254 121 93 / var(--tw-text-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-primary-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(204 69 34 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));\n}\r\n:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));\n}\r\n@media (min-width: 640px) {\r\n  .sm\\:order-last {\n    order: 9999;\n  }\r\n  .sm\\:mb-0 {\n    margin-bottom: 0px;\n  }\r\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\r\n  .sm\\:flex {\n    display: flex;\n  }\r\n  .sm\\:grid {\n    display: grid;\n  }\r\n  .sm\\:h-10 {\n    height: 2.5rem;\n  }\r\n  .sm\\:h-6 {\n    height: 1.5rem;\n  }\r\n  .sm\\:h-64 {\n    height: 16rem;\n  }\r\n  .sm\\:h-7 {\n    height: 1.75rem;\n  }\r\n  .sm\\:h-9 {\n    height: 2.25rem;\n  }\r\n  .sm\\:w-10 {\n    width: 2.5rem;\n  }\r\n  .sm\\:w-6 {\n    width: 1.5rem;\n  }\r\n  .sm\\:w-96 {\n    width: 24rem;\n  }\r\n  .sm\\:w-auto {\n    width: auto;\n  }\r\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\r\n  .sm\\:divide-x > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-x-reverse: 0;\n    border-right-width: calc(1px * var(--tw-divide-x-reverse));\n    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\r\n  .sm\\:rounded-lg {\n    border-radius: 0.5rem;\n  }\r\n  .sm\\:p-5 {\n    padding: 1.25rem;\n  }\r\n  .sm\\:p-6 {\n    padding: 1.5rem;\n  }\r\n  .sm\\:p-8 {\n    padding: 2rem;\n  }\r\n  .sm\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\r\n  .sm\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\r\n  .sm\\:pl-4 {\n    padding-left: 1rem;\n  }\r\n  .sm\\:pr-4 {\n    padding-right: 1rem;\n  }\r\n  .sm\\:pr-8 {\n    padding-right: 2rem;\n  }\r\n  .sm\\:text-center {\n    text-align: center;\n  }\r\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\r\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\r\n  .sm\\:text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\r\n  .sm\\:ring-8 {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  }\r\n  .first\\:sm\\:pl-0:first-child {\n    padding-left: 0px;\n  }\r\n  .last\\:sm\\:pr-0:last-child {\n    padding-right: 0px;\n  }\n}\r\n@media (min-width: 768px) {\r\n  .md\\:inset-0 {\n    inset: 0px;\n  }\r\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\r\n  .md\\:ml-2 {\n    margin-left: 0.5rem;\n  }\r\n  .md\\:mr-6 {\n    margin-right: 1.5rem;\n  }\r\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\r\n  .md\\:block {\n    display: block;\n  }\r\n  .md\\:flex {\n    display: flex;\n  }\r\n  .md\\:grid {\n    display: grid;\n  }\r\n  .md\\:hidden {\n    display: none;\n  }\r\n  .md\\:h-\\[21px\\] {\n    height: 21px;\n  }\r\n  .md\\:h-\\[262px\\] {\n    height: 262px;\n  }\r\n  .md\\:h-\\[278px\\] {\n    height: 278px;\n  }\r\n  .md\\:h-\\[294px\\] {\n    height: 294px;\n  }\r\n  .md\\:h-\\[42px\\] {\n    height: 42px;\n  }\r\n  .md\\:h-\\[654px\\] {\n    height: 654px;\n  }\r\n  .md\\:h-\\[682px\\] {\n    height: 682px;\n  }\r\n  .md\\:h-\\[8px\\] {\n    height: 8px;\n  }\r\n  .md\\:h-\\[95px\\] {\n    height: 95px;\n  }\r\n  .md\\:h-auto {\n    height: auto;\n  }\r\n  .md\\:h-full {\n    height: 100%;\n  }\r\n  .md\\:w-1\\/3 {\n    width: 33.333333%;\n  }\r\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\r\n  .md\\:w-48 {\n    width: 12rem;\n  }\r\n  .md\\:w-\\[96px\\] {\n    width: 96px;\n  }\r\n  .md\\:w-auto {\n    width: auto;\n  }\r\n  .md\\:max-w-\\[142px\\] {\n    max-width: 142px;\n  }\r\n  .md\\:max-w-\\[512px\\] {\n    max-width: 512px;\n  }\r\n  .md\\:max-w-\\[597px\\] {\n    max-width: 597px;\n  }\r\n  .md\\:max-w-xl {\n    max-width: 36rem;\n  }\r\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\r\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\r\n  .md\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\r\n  .md\\:flex-row {\n    flex-direction: row;\n  }\r\n  .md\\:flex-row-reverse {\n    flex-direction: row-reverse;\n  }\r\n  .md\\:items-center {\n    align-items: center;\n  }\r\n  .md\\:justify-between {\n    justify-content: space-between;\n  }\r\n  .md\\:gap-8 {\n    gap: 2rem;\n  }\r\n  .md\\:gap-x-0 {\n    -moz-column-gap: 0px;\n         column-gap: 0px;\n  }\r\n  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n  }\r\n  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(2rem * var(--tw-space-x-reverse));\n    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  }\r\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\r\n  .md\\:divide-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-y-reverse: 0;\n    border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));\n    border-bottom-width: calc(0px * var(--tw-divide-y-reverse));\n  }\r\n  .md\\:rounded-none {\n    border-radius: 0px;\n  }\r\n  .md\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\r\n  .md\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\r\n  .md\\:border-0 {\n    border-width: 0px;\n  }\r\n  .md\\:bg-transparent {\n    background-color: transparent;\n  }\r\n  .md\\:p-0 {\n    padding: 0px;\n  }\r\n  .md\\:p-6 {\n    padding: 1.5rem;\n  }\r\n  .md\\:p-8 {\n    padding: 2rem;\n  }\r\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\r\n  .md\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\r\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\r\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\r\n  .md\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\r\n  .md\\:font-medium {\n    font-weight: 500;\n  }\r\n  .md\\:text-primary-700 {\n    --tw-text-opacity: 1;\n    color: rgb(235 79 39 / var(--tw-text-opacity));\n  }\r\n  .md\\:hover\\:bg-transparent:hover {\n    background-color: transparent;\n  }\r\n  .md\\:hover\\:text-primary-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(235 79 39 / var(--tw-text-opacity));\n  }\r\n  :is(.dark .md\\:dark\\:bg-transparent) {\n    background-color: transparent;\n  }\r\n  :is(.dark .md\\:dark\\:text-white) {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\r\n  :is(.dark .md\\:dark\\:hover\\:bg-transparent:hover) {\n    background-color: transparent;\n  }\r\n  :is(.dark .md\\:dark\\:hover\\:text-white:hover) {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n}\r\n@media (min-width: 1024px) {\r\n  .lg\\:max-w-7xl {\n    max-width: 80rem;\n  }\r\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\r\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\r\n@media (min-width: 1280px) {\r\n  .xl\\:h-80 {\n    height: 20rem;\n  }\r\n  .xl\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n}\r\n@media (min-width: 1536px) {\r\n  .\\32xl\\:h-96 {\n    height: 24rem;\n  }\n}\r\n";
  styleInject(css_248z$2);

  function noop() { }
  const identity = x => x;
  function assign(tar, src) {
      // @ts-ignore
      for (const k in src)
          tar[k] = src[k];
      return tar;
  }
  function add_location(element, file, line, column, char) {
      element.__svelte_meta = {
          loc: { file, line, column, char }
      };
  }
  function run(fn) {
      return fn();
  }
  function blank_object() {
      return Object.create(null);
  }
  function run_all(fns) {
      fns.forEach(run);
  }
  function is_function(thing) {
      return typeof thing === 'function';
  }
  function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
  }
  function is_empty(obj) {
      return Object.keys(obj).length === 0;
  }
  function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
          const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
          return definition[0](slot_ctx);
      }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn
          ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
          : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
          const lets = definition[2](fn(dirty));
          if ($$scope.dirty === undefined) {
              return lets;
          }
          if (typeof lets === 'object') {
              const merged = [];
              const len = Math.max($$scope.dirty.length, lets.length);
              for (let i = 0; i < len; i += 1) {
                  merged[i] = $$scope.dirty[i] | lets[i];
              }
              return merged;
          }
          return $$scope.dirty | lets;
      }
      return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
      if (slot_changes) {
          const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
          slot.p(slot_context, slot_changes);
      }
  }
  function get_all_dirty_from_scope($$scope) {
      if ($$scope.ctx.length > 32) {
          const dirty = [];
          const length = $$scope.ctx.length / 32;
          for (let i = 0; i < length; i++) {
              dirty[i] = -1;
          }
          return dirty;
      }
      return -1;
  }
  function exclude_internal_props(props) {
      const result = {};
      for (const k in props)
          if (k[0] !== '$')
              result[k] = props[k];
      return result;
  }
  function compute_rest_props(props, keys) {
      const rest = {};
      keys = new Set(keys);
      for (const k in props)
          if (!keys.has(k) && k[0] !== '$')
              rest[k] = props[k];
      return rest;
  }
  function action_destroyer(action_result) {
      return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }

  const is_client = typeof window !== 'undefined';
  let now = is_client
      ? () => window.performance.now()
      : () => Date.now();
  let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

  const tasks = new Set();
  function run_tasks(now) {
      tasks.forEach(task => {
          if (!task.c(now)) {
              tasks.delete(task);
              task.f();
          }
      });
      if (tasks.size !== 0)
          raf(run_tasks);
  }
  /**
   * Creates a new task that runs on each raf frame
   * until it returns a falsy value or is aborted
   */
  function loop(callback) {
      let task;
      if (tasks.size === 0)
          raf(run_tasks);
      return {
          promise: new Promise(fulfill => {
              tasks.add(task = { c: callback, f: fulfill });
          }),
          abort() {
              tasks.delete(task);
          }
      };
  }

  const globals = (typeof window !== 'undefined'
      ? window
      : typeof globalThis !== 'undefined'
          ? globalThis
          : global);
  function append(target, node) {
      target.appendChild(node);
  }
  function get_root_for_style(node) {
      if (!node)
          return document;
      const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
      if (root && root.host) {
          return root;
      }
      return node.ownerDocument;
  }
  function append_empty_stylesheet(node) {
      const style_element = element('style');
      append_stylesheet(get_root_for_style(node), style_element);
      return style_element.sheet;
  }
  function append_stylesheet(node, style) {
      append(node.head || node, style);
      return style.sheet;
  }
  function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
  }
  function detach(node) {
      if (node.parentNode) {
          node.parentNode.removeChild(node);
      }
  }
  function element(name) {
      return document.createElement(name);
  }
  function svg_element(name) {
      return document.createElementNS('http://www.w3.org/2000/svg', name);
  }
  function text(data) {
      return document.createTextNode(data);
  }
  function space() {
      return text(' ');
  }
  function empty() {
      return text('');
  }
  function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
  }
  function stop_propagation(fn) {
      return function (event) {
          event.stopPropagation();
          // @ts-ignore
          return fn.call(this, event);
      };
  }
  function attr(node, attribute, value) {
      if (value == null)
          node.removeAttribute(attribute);
      else if (node.getAttribute(attribute) !== value)
          node.setAttribute(attribute, value);
  }
  /**
   * List of attributes that should always be set through the attr method,
   * because updating them through the property setter doesn't work reliably.
   * In the example of `width`/`height`, the problem is that the setter only
   * accepts numeric values, but the attribute can also be set to a string like `50%`.
   * If this list becomes too big, rethink this approach.
   */
  const always_set_through_set_attribute = ['width', 'height'];
  function set_attributes(node, attributes) {
      // @ts-ignore
      const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
      for (const key in attributes) {
          if (attributes[key] == null) {
              node.removeAttribute(key);
          }
          else if (key === 'style') {
              node.style.cssText = attributes[key];
          }
          else if (key === '__value') {
              node.value = node[key] = attributes[key];
          }
          else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) {
              node[key] = attributes[key];
          }
          else {
              attr(node, key, attributes[key]);
          }
      }
  }
  function set_svg_attributes(node, attributes) {
      for (const key in attributes) {
          attr(node, key, attributes[key]);
      }
  }
  function set_custom_element_data_map(node, data_map) {
      Object.keys(data_map).forEach((key) => {
          set_custom_element_data(node, key, data_map[key]);
      });
  }
  function set_custom_element_data(node, prop, value) {
      if (prop in node) {
          node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
      }
      else {
          attr(node, prop, value);
      }
  }
  function set_dynamic_element_data(tag) {
      return (/-/.test(tag)) ? set_custom_element_data_map : set_attributes;
  }
  function children(element) {
      return Array.from(element.childNodes);
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
      const e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, bubbles, cancelable, detail);
      return e;
  }

  // we need to store the information for multiple documents because a Svelte application could also contain iframes
  // https://github.com/sveltejs/svelte/issues/3624
  const managed_styles = new Map();
  let active = 0;
  // https://github.com/darkskyapp/string-hash/blob/master/index.js
  function hash(str) {
      let hash = 5381;
      let i = str.length;
      while (i--)
          hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
      return hash >>> 0;
  }
  function create_style_information(doc, node) {
      const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
      managed_styles.set(doc, info);
      return info;
  }
  function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
      const step = 16.666 / duration;
      let keyframes = '{\n';
      for (let p = 0; p <= 1; p += step) {
          const t = a + (b - a) * ease(p);
          keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
      }
      const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
      const name = `__svelte_${hash(rule)}_${uid}`;
      const doc = get_root_for_style(node);
      const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
      if (!rules[name]) {
          rules[name] = true;
          stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
      }
      const animation = node.style.animation || '';
      node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
      active += 1;
      return name;
  }
  function delete_rule(node, name) {
      const previous = (node.style.animation || '').split(', ');
      const next = previous.filter(name
          ? anim => anim.indexOf(name) < 0 // remove specific animation
          : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
      );
      const deleted = previous.length - next.length;
      if (deleted) {
          node.style.animation = next.join(', ');
          active -= deleted;
          if (!active)
              clear_rules();
      }
  }
  function clear_rules() {
      raf(() => {
          if (active)
              return;
          managed_styles.forEach(info => {
              const { ownerNode } = info.stylesheet;
              // there is no ownerNode if it runs on jsdom.
              if (ownerNode)
                  detach(ownerNode);
          });
          managed_styles.clear();
      });
  }

  let current_component;
  function set_current_component(component) {
      current_component = component;
  }
  function get_current_component() {
      if (!current_component)
          throw new Error('Function called outside component initialization');
      return current_component;
  }
  /**
   * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
   * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
   * it can be called from an external module).
   *
   * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
   *
   * https://svelte.dev/docs#run-time-svelte-onmount
   */
  function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
  }
  /**
   * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
   * Event dispatchers are functions that can take two arguments: `name` and `detail`.
   *
   * Component events created with `createEventDispatcher` create a
   * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
   * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
   * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
   * property and can contain any type of data.
   *
   * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
   */
  function createEventDispatcher() {
      const component = get_current_component();
      return (type, detail, { cancelable = false } = {}) => {
          const callbacks = component.$$.callbacks[type];
          if (callbacks) {
              // TODO are there situations where events could be dispatched
              // in a server (non-DOM) environment?
              const event = custom_event(type, detail, { cancelable });
              callbacks.slice().forEach(fn => {
                  fn.call(component, event);
              });
              return !event.defaultPrevented;
          }
          return true;
      };
  }
  /**
   * Associates an arbitrary `context` object with the current component and the specified `key`
   * and returns that object. The context is then available to children of the component
   * (including slotted content) with `getContext`.
   *
   * Like lifecycle functions, this must be called during component initialisation.
   *
   * https://svelte.dev/docs#run-time-svelte-setcontext
   */
  function setContext(key, context) {
      get_current_component().$$.context.set(key, context);
      return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component with the specified `key`.
   * Must be called during component initialisation.
   *
   * https://svelte.dev/docs#run-time-svelte-getcontext
   */
  function getContext(key) {
      return get_current_component().$$.context.get(key);
  }
  // TODO figure out if we still want to support
  // shorthand events, or if we want to implement
  // a real bubbling mechanism
  function bubble(component, event) {
      const callbacks = component.$$.callbacks[event.type];
      if (callbacks) {
          // @ts-ignore
          callbacks.slice().forEach(fn => fn.call(this, event));
      }
  }

  const dirty_components = [];
  const binding_callbacks = [];
  let render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = /* @__PURE__ */ Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
      if (!update_scheduled) {
          update_scheduled = true;
          resolved_promise.then(flush);
      }
  }
  function tick() {
      schedule_update();
      return resolved_promise;
  }
  function add_render_callback(fn) {
      render_callbacks.push(fn);
  }
  // flush() calls callbacks in this order:
  // 1. All beforeUpdate callbacks, in order: parents before children
  // 2. All bind:this callbacks, in reverse order: children before parents.
  // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
  //    for afterUpdates called during the initial onMount, which are called in
  //    reverse order: children before parents.
  // Since callbacks might update component values, which could trigger another
  // call to flush(), the following steps guard against this:
  // 1. During beforeUpdate, any updated components will be added to the
  //    dirty_components array and will cause a reentrant call to flush(). Because
  //    the flush index is kept outside the function, the reentrant call will pick
  //    up where the earlier call left off and go through all dirty components. The
  //    current_component value is saved and restored so that the reentrant call will
  //    not interfere with the "parent" flush() call.
  // 2. bind:this callbacks cannot trigger new flush() calls.
  // 3. During afterUpdate, any updated components will NOT have their afterUpdate
  //    callback called a second time; the seen_callbacks set, outside the flush()
  //    function, guarantees this behavior.
  const seen_callbacks = new Set();
  let flushidx = 0; // Do *not* move this inside the flush() function
  function flush() {
      // Do not reenter flush while dirty components are updated, as this can
      // result in an infinite loop. Instead, let the inner flush handle it.
      // Reentrancy is ok afterwards for bindings etc.
      if (flushidx !== 0) {
          return;
      }
      const saved_component = current_component;
      do {
          // first, call beforeUpdate functions
          // and update components
          try {
              while (flushidx < dirty_components.length) {
                  const component = dirty_components[flushidx];
                  flushidx++;
                  set_current_component(component);
                  update(component.$$);
              }
          }
          catch (e) {
              // reset dirty state to not end up in a deadlocked state and then rethrow
              dirty_components.length = 0;
              flushidx = 0;
              throw e;
          }
          set_current_component(null);
          dirty_components.length = 0;
          flushidx = 0;
          while (binding_callbacks.length)
              binding_callbacks.pop()();
          // then, once components are updated, call
          // afterUpdate functions. This may cause
          // subsequent updates...
          for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                  // ...so guard against infinite loops
                  seen_callbacks.add(callback);
                  callback();
              }
          }
          render_callbacks.length = 0;
      } while (dirty_components.length);
      while (flush_callbacks.length) {
          flush_callbacks.pop()();
      }
      update_scheduled = false;
      seen_callbacks.clear();
      set_current_component(saved_component);
  }
  function update($$) {
      if ($$.fragment !== null) {
          $$.update();
          run_all($$.before_update);
          const dirty = $$.dirty;
          $$.dirty = [-1];
          $$.fragment && $$.fragment.p($$.ctx, dirty);
          $$.after_update.forEach(add_render_callback);
      }
  }
  /**
   * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
   */
  function flush_render_callbacks(fns) {
      const filtered = [];
      const targets = [];
      render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
      targets.forEach((c) => c());
      render_callbacks = filtered;
  }

  let promise;
  function wait() {
      if (!promise) {
          promise = Promise.resolve();
          promise.then(() => {
              promise = null;
          });
      }
      return promise;
  }
  function dispatch(node, direction, kind) {
      node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
  }
  const outroing = new Set();
  let outros;
  function group_outros() {
      outros = {
          r: 0,
          c: [],
          p: outros // parent group
      };
  }
  function check_outros() {
      if (!outros.r) {
          run_all(outros.c);
      }
      outros = outros.p;
  }
  function transition_in(block, local) {
      if (block && block.i) {
          outroing.delete(block);
          block.i(local);
      }
  }
  function transition_out(block, local, detach, callback) {
      if (block && block.o) {
          if (outroing.has(block))
              return;
          outroing.add(block);
          outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                  if (detach)
                      block.d(1);
                  callback();
              }
          });
          block.o(local);
      }
      else if (callback) {
          callback();
      }
  }
  const null_transition = { duration: 0 };
  function create_bidirectional_transition(node, fn, params, intro) {
      const options = { direction: 'both' };
      let config = fn(node, params, options);
      let t = intro ? 0 : 1;
      let running_program = null;
      let pending_program = null;
      let animation_name = null;
      function clear_animation() {
          if (animation_name)
              delete_rule(node, animation_name);
      }
      function init(program, duration) {
          const d = (program.b - t);
          duration *= Math.abs(d);
          return {
              a: t,
              b: program.b,
              d,
              duration,
              start: program.start,
              end: program.start + duration,
              group: program.group
          };
      }
      function go(b) {
          const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
          const program = {
              start: now() + delay,
              b
          };
          if (!b) {
              // @ts-ignore todo: improve typings
              program.group = outros;
              outros.r += 1;
          }
          if (running_program || pending_program) {
              pending_program = program;
          }
          else {
              // if this is an intro, and there's a delay, we need to do
              // an initial tick and/or apply CSS animation immediately
              if (css) {
                  clear_animation();
                  animation_name = create_rule(node, t, b, duration, delay, easing, css);
              }
              if (b)
                  tick(0, 1);
              running_program = init(program, duration);
              add_render_callback(() => dispatch(node, b, 'start'));
              loop(now => {
                  if (pending_program && now > pending_program.start) {
                      running_program = init(pending_program, duration);
                      pending_program = null;
                      dispatch(node, running_program.b, 'start');
                      if (css) {
                          clear_animation();
                          animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                      }
                  }
                  if (running_program) {
                      if (now >= running_program.end) {
                          tick(t = running_program.b, 1 - t);
                          dispatch(node, running_program.b, 'end');
                          if (!pending_program) {
                              // we're done
                              if (running_program.b) {
                                  // intro — we can tidy up immediately
                                  clear_animation();
                              }
                              else {
                                  // outro — needs to be coordinated
                                  if (!--running_program.group.r)
                                      run_all(running_program.group.c);
                              }
                          }
                          running_program = null;
                      }
                      else if (now >= running_program.start) {
                          const p = now - running_program.start;
                          t = running_program.a + running_program.d * easing(p / running_program.duration);
                          tick(t, 1 - t);
                      }
                  }
                  return !!(running_program || pending_program);
              });
          }
      }
      return {
          run(b) {
              if (is_function(config)) {
                  wait().then(() => {
                      // @ts-ignore
                      config = config(options);
                      go(b);
                  });
              }
              else {
                  go(b);
              }
          },
          end() {
              clear_animation();
              running_program = pending_program = null;
          }
      };
  }

  function destroy_block(block, lookup) {
      block.d(1);
      lookup.delete(block.key);
  }
  function outro_and_destroy_block(block, lookup) {
      transition_out(block, 1, 1, () => {
          lookup.delete(block.key);
      });
  }
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
      let o = old_blocks.length;
      let n = list.length;
      let i = o;
      const old_indexes = {};
      while (i--)
          old_indexes[old_blocks[i].key] = i;
      const new_blocks = [];
      const new_lookup = new Map();
      const deltas = new Map();
      const updates = [];
      i = n;
      while (i--) {
          const child_ctx = get_context(ctx, list, i);
          const key = get_key(child_ctx);
          let block = lookup.get(key);
          if (!block) {
              block = create_each_block(key, child_ctx);
              block.c();
          }
          else if (dynamic) {
              // defer updates until all the DOM shuffling is done
              updates.push(() => block.p(child_ctx, dirty));
          }
          new_lookup.set(key, new_blocks[i] = block);
          if (key in old_indexes)
              deltas.set(key, Math.abs(i - old_indexes[key]));
      }
      const will_move = new Set();
      const did_move = new Set();
      function insert(block) {
          transition_in(block, 1);
          block.m(node, next);
          lookup.set(block.key, block);
          next = block.first;
          n--;
      }
      while (o && n) {
          const new_block = new_blocks[n - 1];
          const old_block = old_blocks[o - 1];
          const new_key = new_block.key;
          const old_key = old_block.key;
          if (new_block === old_block) {
              // do nothing
              next = new_block.first;
              o--;
              n--;
          }
          else if (!new_lookup.has(old_key)) {
              // remove old block
              destroy(old_block, lookup);
              o--;
          }
          else if (!lookup.has(new_key) || will_move.has(new_key)) {
              insert(new_block);
          }
          else if (did_move.has(old_key)) {
              o--;
          }
          else if (deltas.get(new_key) > deltas.get(old_key)) {
              did_move.add(new_key);
              insert(new_block);
          }
          else {
              will_move.add(old_key);
              o--;
          }
      }
      while (o--) {
          const old_block = old_blocks[o];
          if (!new_lookup.has(old_block.key))
              destroy(old_block, lookup);
      }
      while (n)
          insert(new_blocks[n - 1]);
      run_all(updates);
      return new_blocks;
  }
  function validate_each_keys(ctx, list, get_context, get_key) {
      const keys = new Set();
      for (let i = 0; i < list.length; i++) {
          const key = get_key(get_context(ctx, list, i));
          if (keys.has(key)) {
              throw new Error('Cannot have duplicate keys in a keyed each');
          }
          keys.add(key);
      }
  }

  function get_spread_update(levels, updates) {
      const update = {};
      const to_null_out = {};
      const accounted_for = { $$scope: 1 };
      let i = levels.length;
      while (i--) {
          const o = levels[i];
          const n = updates[i];
          if (n) {
              for (const key in o) {
                  if (!(key in n))
                      to_null_out[key] = 1;
              }
              for (const key in n) {
                  if (!accounted_for[key]) {
                      update[key] = n[key];
                      accounted_for[key] = 1;
                  }
              }
              levels[i] = n;
          }
          else {
              for (const key in o) {
                  accounted_for[key] = 1;
              }
          }
      }
      for (const key in to_null_out) {
          if (!(key in update))
              update[key] = undefined;
      }
      return update;
  }
  function get_spread_object(spread_props) {
      return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
  }

  /** regex of all html void element names */
  const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
  function is_void(name) {
      return void_element_names.test(name) || name.toLowerCase() === '!doctype';
  }
  function create_component(block) {
      block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
      const { fragment, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      if (!customElement) {
          // onMount happens before the initial afterUpdate
          add_render_callback(() => {
              const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
              // if the component was destroyed immediately
              // it will update the `$$.on_destroy` reference to `null`.
              // the destructured on_destroy may still reference to the old array
              if (component.$$.on_destroy) {
                  component.$$.on_destroy.push(...new_on_destroy);
              }
              else {
                  // Edge case - component was destroyed immediately,
                  // most likely as a result of a binding initialising
                  run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
          });
      }
      after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
          flush_render_callbacks($$.after_update);
          run_all($$.on_destroy);
          $$.fragment && $$.fragment.d(detaching);
          // TODO null out other refs, including component.$$ (but need to
          // preserve final state?)
          $$.on_destroy = $$.fragment = null;
          $$.ctx = [];
      }
  }
  function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
          dirty_components.push(component);
          schedule_update();
          component.$$.dirty.fill(0);
      }
      component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
  }
  function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
      const parent_component = current_component;
      set_current_component(component);
      const $$ = component.$$ = {
          fragment: null,
          ctx: [],
          // state
          props,
          update: noop,
          not_equal,
          bound: blank_object(),
          // lifecycle
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
          // everything else
          callbacks: blank_object(),
          dirty,
          skip_bound: false,
          root: options.target || parent_component.$$.root
      };
      append_styles && append_styles($$.root);
      let ready = false;
      $$.ctx = instance
          ? instance(component, options.props || {}, (i, ret, ...rest) => {
              const value = rest.length ? rest[0] : ret;
              if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                  if (!$$.skip_bound && $$.bound[i])
                      $$.bound[i](value);
                  if (ready)
                      make_dirty(component, i);
              }
              return ret;
          })
          : [];
      $$.update();
      ready = true;
      run_all($$.before_update);
      // `false` as a special case of no DOM component
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
      if (options.target) {
          if (options.hydrate) {
              const nodes = children(options.target);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.l(nodes);
              nodes.forEach(detach);
          }
          else {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.c();
          }
          if (options.intro)
              transition_in(component.$$.fragment);
          mount_component(component, options.target, options.anchor, options.customElement);
          flush();
      }
      set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */
  class SvelteComponent {
      $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
      }
      $on(type, callback) {
          if (!is_function(callback)) {
              return noop;
          }
          const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
          callbacks.push(callback);
          return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                  callbacks.splice(index, 1);
          };
      }
      $set($$props) {
          if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
          }
      }
  }

  function dispatch_dev(type, detail) {
      document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
  }
  function append_dev(target, node) {
      dispatch_dev('SvelteDOMInsert', { target, node });
      append(target, node);
  }
  function insert_dev(target, node, anchor) {
      dispatch_dev('SvelteDOMInsert', { target, node, anchor });
      insert(target, node, anchor);
  }
  function detach_dev(node) {
      dispatch_dev('SvelteDOMRemove', { node });
      detach(node);
  }
  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
      const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
      if (has_prevent_default)
          modifiers.push('preventDefault');
      if (has_stop_propagation)
          modifiers.push('stopPropagation');
      if (has_stop_immediate_propagation)
          modifiers.push('stopImmediatePropagation');
      dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
      const dispose = listen(node, event, handler, options);
      return () => {
          dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
          dispose();
      };
  }
  function attr_dev(node, attribute, value) {
      attr(node, attribute, value);
      if (value == null)
          dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
      else
          dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
  }
  function set_data_dev(text, data) {
      data = '' + data;
      if (text.data === data)
          return;
      dispatch_dev('SvelteDOMSetData', { node: text, data });
      text.data = data;
  }
  function validate_each_argument(arg) {
      if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
          let msg = '{#each} only iterates over array-like objects.';
          if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
              msg += ' You can use a spread to convert this iterable into an array.';
          }
          throw new Error(msg);
      }
  }
  function validate_slots(name, slot, keys) {
      for (const slot_key of Object.keys(slot)) {
          if (!~keys.indexOf(slot_key)) {
              console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
          }
      }
  }
  function validate_dynamic_element(tag) {
      const is_string = typeof tag === 'string';
      if (tag && !is_string) {
          throw new Error('<svelte:element> expects "this" attribute to be a string.');
      }
  }
  function validate_void_dynamic_element(tag) {
      if (tag && is_void(tag)) {
          console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
      }
  }
  /**
   * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
   */
  class SvelteComponentDev extends SvelteComponent {
      constructor(options) {
          if (!options || (!options.target && !options.$$inline)) {
              throw new Error("'target' is a required option");
          }
          super();
      }
      $destroy() {
          super.$destroy();
          this.$destroy = () => {
              console.warn('Component was already destroyed'); // eslint-disable-line no-console
          };
      }
      $capture_state() { }
      $inject_state() { }
  }

  /**
   * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
   *
   * Specifically:
   * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
   * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
   *
   * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
   */
  function twJoin() {
    var index = 0;
    var argument;
    var resolvedValue;
    var string = '';
    while (index < arguments.length) {
      if (argument = arguments[index++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += ' ');
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  function toValue(mix) {
    if (typeof mix === 'string') {
      return mix;
    }
    var resolvedValue;
    var string = '';
    for (var k = 0; k < mix.length; k++) {
      if (mix[k]) {
        if (resolvedValue = toValue(mix[k])) {
          string && (string += ' ');
          string += resolvedValue;
        }
      }
    }
    return string;
  }

  var CLASS_PART_SEPARATOR = '-';
  function createClassUtils(config) {
    var classMap = createClassMap(config);
    var conflictingClassGroups = config.conflictingClassGroups,
      _config$conflictingCl = config.conflictingClassGroupModifiers,
      conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
    function getClassGroupId(className) {
      var classParts = className.split(CLASS_PART_SEPARATOR);
      // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
      if (classParts[0] === '' && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    }
    function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
      var conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
      }
      return conflicts;
    }
    return {
      getClassGroupId: getClassGroupId,
      getConflictingClassGroupIds: getConflictingClassGroupIds
    };
  }
  function getGroupRecursive(classParts, classPartObject) {
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    var currentClassPart = classParts[0];
    var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return undefined;
    }
    var classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(function (_ref) {
      var validator = _ref.validator;
      return validator(classRest);
    })?.classGroupId;
  }
  var arbitraryPropertyRegex = /^\[(.+)\]$/;
  function getGroupIdForArbitraryProperty(className) {
    if (arbitraryPropertyRegex.test(className)) {
      var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
      if (property) {
        // I use two dots here because one dot is used as prefix for class groups in plugins
        return 'arbitrary..' + property;
      }
    }
  }
  /**
   * Exported for testing only
   */
  function createClassMap(config) {
    var theme = config.theme,
      prefix = config.prefix;
    var classMap = {
      nextPart: new Map(),
      validators: []
    };
    var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(function (_ref2) {
      var classGroupId = _ref2[0],
        classGroup = _ref2[1];
      processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
  }
  function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
    classGroup.forEach(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === 'function') {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId: classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(function (_ref3) {
        var key = _ref3[0],
          classGroup = _ref3[1];
        processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  }
  function getPart(classPartObject, path) {
    var currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  }
  function isThemeGetter(func) {
    return func.isThemeGetter;
  }
  function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
    if (!prefix) {
      return classGroupEntries;
    }
    return classGroupEntries.map(function (_ref4) {
      var classGroupId = _ref4[0],
        classGroup = _ref4[1];
      var prefixedClassGroup = classGroup.map(function (classDefinition) {
        if (typeof classDefinition === 'string') {
          return prefix + classDefinition;
        }
        if (typeof classDefinition === 'object') {
          return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
            var key = _ref5[0],
              value = _ref5[1];
            return [prefix + key, value];
          }));
        }
        return classDefinition;
      });
      return [classGroupId, prefixedClassGroup];
    });
  }

  // LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
  function createLruCache(maxCacheSize) {
    if (maxCacheSize < 1) {
      return {
        get: function get() {
          return undefined;
        },
        set: function set() {}
      };
    }
    var cacheSize = 0;
    var cache = new Map();
    var previousCache = new Map();
    function update(key, value) {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = new Map();
      }
    }
    return {
      get: function get(key) {
        var value = cache.get(key);
        if (value !== undefined) {
          return value;
        }
        if ((value = previousCache.get(key)) !== undefined) {
          update(key, value);
          return value;
        }
      },
      set: function set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  }

  var IMPORTANT_MODIFIER = '!';
  function createSplitModifiers(config) {
    var separator = config.separator || ':';
    var isSeparatorSingleCharacter = separator.length === 1;
    var firstSeparatorCharacter = separator[0];
    var separatorLength = separator.length;
    // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    return function splitModifiers(className) {
      var modifiers = [];
      var bracketDepth = 0;
      var modifierStart = 0;
      var postfixModifierPosition;
      for (var index = 0; index < className.length; index++) {
        var currentCharacter = className[index];
        if (bracketDepth === 0) {
          if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
            modifiers.push(className.slice(modifierStart, index));
            modifierStart = index + separatorLength;
            continue;
          }
          if (currentCharacter === '/') {
            postfixModifierPosition = index;
            continue;
          }
        }
        if (currentCharacter === '[') {
          bracketDepth++;
        } else if (currentCharacter === ']') {
          bracketDepth--;
        }
      }
      var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
      var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
      var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
      return {
        modifiers: modifiers,
        hasImportantModifier: hasImportantModifier,
        baseClassName: baseClassName,
        maybePostfixModifierPosition: maybePostfixModifierPosition
      };
    };
  }
  /**
   * Sorts modifiers according to following schema:
   * - Predefined modifiers are sorted alphabetically
   * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
   */
  function sortModifiers(modifiers) {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    var sortedModifiers = [];
    var unsortedModifiers = [];
    modifiers.forEach(function (modifier) {
      var isArbitraryVariant = modifier[0] === '[';
      if (isArbitraryVariant) {
        sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
    return sortedModifiers;
  }

  function createConfigUtils(config) {
    return {
      cache: createLruCache(config.cacheSize),
      splitModifiers: createSplitModifiers(config),
      ...createClassUtils(config)
    };
  }

  var SPLIT_CLASSES_REGEX = /\s+/;
  function mergeClassList(classList, configUtils) {
    var splitModifiers = configUtils.splitModifiers,
      getClassGroupId = configUtils.getClassGroupId,
      getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
    /**
     * Set of classGroupIds in following format:
     * `{importantModifier}{variantModifiers}{classGroupId}`
     * @example 'float'
     * @example 'hover:focus:bg-color'
     * @example 'md:!pr'
     */
    var classGroupsInConflict = new Set();
    return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
      var _splitModifiers = splitModifiers(originalClassName),
        modifiers = _splitModifiers.modifiers,
        hasImportantModifier = _splitModifiers.hasImportantModifier,
        baseClassName = _splitModifiers.baseClassName,
        maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
      var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
      if (!classGroupId) {
        if (!maybePostfixModifierPosition) {
          return {
            isTailwindClass: false,
            originalClassName: originalClassName
          };
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          return {
            isTailwindClass: false,
            originalClassName: originalClassName
          };
        }
        hasPostfixModifier = false;
      }
      var variantModifier = sortModifiers(modifiers).join(':');
      var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      return {
        isTailwindClass: true,
        modifierId: modifierId,
        classGroupId: classGroupId,
        originalClassName: originalClassName,
        hasPostfixModifier: hasPostfixModifier
      };
    }).reverse()
    // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
    .filter(function (parsed) {
      if (!parsed.isTailwindClass) {
        return true;
      }
      var modifierId = parsed.modifierId,
        classGroupId = parsed.classGroupId,
        hasPostfixModifier = parsed.hasPostfixModifier;
      var classId = modifierId + classGroupId;
      if (classGroupsInConflict.has(classId)) {
        return false;
      }
      classGroupsInConflict.add(classId);
      getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function (group) {
        return classGroupsInConflict.add(modifierId + group);
      });
      return true;
    }).reverse().map(function (parsed) {
      return parsed.originalClassName;
    }).join(' ');
  }

  function createTailwindMerge() {
    for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
      createConfig[_key] = arguments[_key];
    }
    var configUtils;
    var cacheGet;
    var cacheSet;
    var functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      var firstCreateConfig = createConfig[0],
        restCreateConfig = createConfig.slice(1);
      var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
        return createConfigCurrent(previousConfig);
      }, firstCreateConfig());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      var cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      var result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }

  function fromTheme(key) {
    var themeGetter = function themeGetter(theme) {
      return theme[key] || [];
    };
    themeGetter.isThemeGetter = true;
    return themeGetter;
  }

  var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var fractionRegex = /^\d+\/\d+$/;
  var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
  var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  // Shadow always begins with x and y offset separated by underscore
  var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  function isLength(value) {
    return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
  }
  function isArbitraryLength(value) {
    return getIsArbitraryValue(value, 'length', isLengthOnly);
  }
  function isArbitrarySize(value) {
    return getIsArbitraryValue(value, 'size', isNever);
  }
  function isArbitraryPosition(value) {
    return getIsArbitraryValue(value, 'position', isNever);
  }
  function isArbitraryUrl(value) {
    return getIsArbitraryValue(value, 'url', isUrl);
  }
  function isArbitraryNumber(value) {
    return getIsArbitraryValue(value, 'number', isNumber);
  }
  function isNumber(value) {
    return !Number.isNaN(Number(value));
  }
  function isPercent(value) {
    return value.endsWith('%') && isNumber(value.slice(0, -1));
  }
  function isInteger(value) {
    return isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly);
  }
  function isArbitraryValue(value) {
    return arbitraryValueRegex.test(value);
  }
  function isAny() {
    return true;
  }
  function isTshirtSize(value) {
    return tshirtUnitRegex.test(value);
  }
  function isArbitraryShadow(value) {
    return getIsArbitraryValue(value, '', isShadow);
  }
  function getIsArbitraryValue(value, label, testValue) {
    var result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return result[1] === label;
      }
      return testValue(result[2]);
    }
    return false;
  }
  function isLengthOnly(value) {
    return lengthUnitRegex.test(value);
  }
  function isNever() {
    return false;
  }
  function isUrl(value) {
    return value.startsWith('url(');
  }
  function isIntegerOnly(value) {
    return Number.isInteger(Number(value));
  }
  function isShadow(value) {
    return shadowRegex.test(value);
  }

  function getDefaultConfig() {
    var colors = fromTheme('colors');
    var spacing = fromTheme('spacing');
    var blur = fromTheme('blur');
    var brightness = fromTheme('brightness');
    var borderColor = fromTheme('borderColor');
    var borderRadius = fromTheme('borderRadius');
    var borderSpacing = fromTheme('borderSpacing');
    var borderWidth = fromTheme('borderWidth');
    var contrast = fromTheme('contrast');
    var grayscale = fromTheme('grayscale');
    var hueRotate = fromTheme('hueRotate');
    var invert = fromTheme('invert');
    var gap = fromTheme('gap');
    var gradientColorStops = fromTheme('gradientColorStops');
    var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    var inset = fromTheme('inset');
    var margin = fromTheme('margin');
    var opacity = fromTheme('opacity');
    var padding = fromTheme('padding');
    var saturate = fromTheme('saturate');
    var scale = fromTheme('scale');
    var sepia = fromTheme('sepia');
    var skew = fromTheme('skew');
    var space = fromTheme('space');
    var translate = fromTheme('translate');
    var getOverscroll = function getOverscroll() {
      return ['auto', 'contain', 'none'];
    };
    var getOverflow = function getOverflow() {
      return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
    };
    var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
      return ['auto', isArbitraryValue, spacing];
    };
    var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
      return [isArbitraryValue, spacing];
    };
    var getLengthWithEmpty = function getLengthWithEmpty() {
      return ['', isLength];
    };
    var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
      return ['auto', isNumber, isArbitraryValue];
    };
    var getPositions = function getPositions() {
      return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
    };
    var getLineStyles = function getLineStyles() {
      return ['solid', 'dashed', 'dotted', 'double', 'none'];
    };
    var getBlendModes = function getBlendModes() {
      return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
    };
    var getAlign = function getAlign() {
      return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
    };
    var getZeroAndEmpty = function getZeroAndEmpty() {
      return ['', '0', isArbitraryValue];
    };
    var getBreaks = function getBreaks() {
      return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
    };
    var getNumber = function getNumber() {
      return [isNumber, isArbitraryNumber];
    };
    var getNumberAndArbitrary = function getNumberAndArbitrary() {
      return [isNumber, isArbitraryValue];
    };
    return {
      cacheSize: 500,
      theme: {
        colors: [isAny],
        spacing: [isLength],
        blur: ['none', '', isTshirtSize, isArbitraryValue],
        brightness: getNumber(),
        borderColor: [colors],
        borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
        borderSpacing: getSpacingWithArbitrary(),
        borderWidth: getLengthWithEmpty(),
        contrast: getNumber(),
        grayscale: getZeroAndEmpty(),
        hueRotate: getNumberAndArbitrary(),
        invert: getZeroAndEmpty(),
        gap: getSpacingWithArbitrary(),
        gradientColorStops: [colors],
        gradientColorStopPositions: [isPercent, isArbitraryLength],
        inset: getSpacingWithAutoAndArbitrary(),
        margin: getSpacingWithAutoAndArbitrary(),
        opacity: getNumber(),
        padding: getSpacingWithArbitrary(),
        saturate: getNumber(),
        scale: getNumber(),
        sepia: getZeroAndEmpty(),
        skew: getNumberAndArbitrary(),
        space: getSpacingWithArbitrary(),
        translate: getSpacingWithArbitrary()
      },
      classGroups: {
        // Layout
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ['auto', 'square', 'video', isArbitraryValue]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         */
        container: ['container'],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isTshirtSize]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        'break-after': [{
          'break-after': getBreaks()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        'break-before': [{
          'break-before': getBreaks()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        'break-inside': [{
          'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        'box-decoration': [{
          'box-decoration': ['slice', 'clone']
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ['border', 'content']
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        "float": [{
          "float": ['right', 'left', 'none']
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ['left', 'right', 'both', 'none']
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ['isolate', 'isolation-auto'],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        'object-fit': [{
          object: ['contain', 'cover', 'fill', 'none', 'scale-down']
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        'object-position': [{
          object: [].concat(getPositions(), [isArbitraryValue])
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: getOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        'overflow-x': [{
          'overflow-x': getOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        'overflow-y': [{
          'overflow-y': getOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: getOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        'overscroll-x': [{
          'overscroll-x': getOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        'overscroll-y': [{
          'overscroll-y': getOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: [inset]
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        'inset-x': [{
          'inset-x': [inset]
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        'inset-y': [{
          'inset-y': [inset]
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: [inset]
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: [inset]
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: [inset]
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: [inset]
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: [inset]
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: [inset]
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ['visible', 'invisible', 'collapse'],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: ['auto', isInteger]
        }],
        // Flexbox and Grid
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: getSpacingWithAutoAndArbitrary()
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        'flex-direction': [{
          flex: ['row', 'row-reverse', 'col', 'col-reverse']
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        'flex-wrap': [{
          flex: ['wrap', 'wrap-reverse', 'nowrap']
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: getZeroAndEmpty()
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: getZeroAndEmpty()
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: ['first', 'last', 'none', isInteger]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        'grid-cols': [{
          'grid-cols': [isAny]
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        'col-start-end': [{
          col: ['auto', {
            span: ['full', isInteger]
          }, isArbitraryValue]
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        'col-start': [{
          'col-start': getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        'col-end': [{
          'col-end': getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        'grid-rows': [{
          'grid-rows': [isAny]
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        'row-start-end': [{
          row: ['auto', {
            span: [isInteger]
          }, isArbitraryValue]
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        'row-start': [{
          'row-start': getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        'row-end': [{
          'row-end': getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        'grid-flow': [{
          'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        'auto-cols': [{
          'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        'auto-rows': [{
          'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: [gap]
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        'gap-x': [{
          'gap-x': [gap]
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        'gap-y': [{
          'gap-y': [gap]
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        'justify-content': [{
          justify: ['normal'].concat(getAlign())
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        'justify-items': [{
          'justify-items': ['start', 'end', 'center', 'stretch']
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        'justify-self': [{
          'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        'align-content': [{
          content: ['normal'].concat(getAlign(), ['baseline'])
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        'align-items': [{
          items: ['start', 'end', 'center', 'baseline', 'stretch']
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        'align-self': [{
          self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        'place-content': [{
          'place-content': [].concat(getAlign(), ['baseline'])
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        'place-items': [{
          'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        'place-self': [{
          'place-self': ['auto', 'start', 'end', 'center', 'stretch']
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: [padding]
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: [padding]
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: [padding]
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: [padding]
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: [padding]
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: [padding]
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: [padding]
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: [padding]
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: [padding]
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: [margin]
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: [margin]
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: [margin]
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: [margin]
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: [margin]
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: [margin]
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: [margin]
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: [margin]
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: [margin]
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/space
         */
        'space-x': [{
          'space-x': [space]
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/space
         */
        'space-x-reverse': ['space-x-reverse'],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/space
         */
        'space-y': [{
          'space-y': [space]
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/space
         */
        'space-y-reverse': ['space-y-reverse'],
        // Sizing
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: ['auto', 'min', 'max', 'fit', isArbitraryValue, spacing]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        'min-w': [{
          'min-w': ['min', 'max', 'fit', isArbitraryValue, isLength]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        'max-w': [{
          'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
            screen: [isTshirtSize]
          }, isTshirtSize, isArbitraryValue]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        'min-h': [{
          'min-h': ['min', 'max', 'fit', isArbitraryValue, isLength]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        'max-h': [{
          'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit']
        }],
        // Typography
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        'font-size': [{
          text: ['base', isTshirtSize, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        'font-style': ['italic', 'not-italic'],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        'font-weight': [{
          font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        'font-family': [{
          font: [isAny]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        'fvn-normal': ['normal-nums'],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        'fvn-ordinal': ['ordinal'],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        'fvn-slashed-zero': ['slashed-zero'],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        'line-clamp': [{
          'line-clamp': ['none', isNumber, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isArbitraryValue, isLength]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        'list-image': [{
          'list-image': ['none', isArbitraryValue]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        'list-style-type': [{
          list: ['none', 'disc', 'decimal', isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        'list-style-position': [{
          list: ['inside', 'outside']
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/placeholder-color
         */
        'placeholder-color': [{
          placeholder: [colors]
        }],
        /**
         * Placeholder Opacity
         * @see https://tailwindcss.com/docs/placeholder-opacity
         */
        'placeholder-opacity': [{
          'placeholder-opacity': [opacity]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        'text-alignment': [{
          text: ['left', 'center', 'right', 'justify', 'start', 'end']
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        'text-color': [{
          text: [colors]
        }],
        /**
         * Text Opacity
         * @see https://tailwindcss.com/docs/text-opacity
         */
        'text-opacity': [{
          'text-opacity': [opacity]
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        'text-decoration-style': [{
          decoration: [].concat(getLineStyles(), ['wavy'])
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        'text-decoration-thickness': [{
          decoration: ['auto', 'from-font', isLength]
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        'underline-offset': [{
          'underline-offset': ['auto', isArbitraryValue, isLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        'text-decoration-color': [{
          decoration: [colors]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: getSpacingWithArbitrary()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        'vertical-align': [{
          align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        "break": [{
          "break": ['normal', 'words', 'all', 'keep']
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ['none', 'manual', 'auto']
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ['none', isArbitraryValue]
        }],
        // Backgrounds
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        'bg-attachment': [{
          bg: ['fixed', 'local', 'scroll']
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        'bg-clip': [{
          'bg-clip': ['border', 'padding', 'content', 'text']
        }],
        /**
         * Background Opacity
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/background-opacity
         */
        'bg-opacity': [{
          'bg-opacity': [opacity]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        'bg-origin': [{
          'bg-origin': ['border', 'padding', 'content']
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        'bg-position': [{
          bg: [].concat(getPositions(), [isArbitraryPosition])
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        'bg-repeat': [{
          bg: ['no-repeat', {
            repeat: ['', 'x', 'y', 'round', 'space']
          }]
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        'bg-size': [{
          bg: ['auto', 'cover', 'contain', isArbitrarySize]
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        'bg-image': [{
          bg: ['none', {
            'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
          }, isArbitraryUrl]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        'bg-color': [{
          bg: [colors]
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        'gradient-from-pos': [{
          from: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        'gradient-via-pos': [{
          via: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        'gradient-to-pos': [{
          to: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        'gradient-from': [{
          from: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        'gradient-via': [{
          via: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        'gradient-to': [{
          to: [gradientColorStops]
        }],
        // Borders
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: [borderRadius]
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-s': [{
          'rounded-s': [borderRadius]
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-e': [{
          'rounded-e': [borderRadius]
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-t': [{
          'rounded-t': [borderRadius]
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-r': [{
          'rounded-r': [borderRadius]
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-b': [{
          'rounded-b': [borderRadius]
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-l': [{
          'rounded-l': [borderRadius]
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-ss': [{
          'rounded-ss': [borderRadius]
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-se': [{
          'rounded-se': [borderRadius]
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-ee': [{
          'rounded-ee': [borderRadius]
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-es': [{
          'rounded-es': [borderRadius]
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-tl': [{
          'rounded-tl': [borderRadius]
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-tr': [{
          'rounded-tr': [borderRadius]
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-br': [{
          'rounded-br': [borderRadius]
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        'rounded-bl': [{
          'rounded-bl': [borderRadius]
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w': [{
          border: [borderWidth]
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-x': [{
          'border-x': [borderWidth]
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-y': [{
          'border-y': [borderWidth]
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-s': [{
          'border-s': [borderWidth]
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-e': [{
          'border-e': [borderWidth]
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-t': [{
          'border-t': [borderWidth]
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-r': [{
          'border-r': [borderWidth]
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-b': [{
          'border-b': [borderWidth]
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        'border-w-l': [{
          'border-l': [borderWidth]
        }],
        /**
         * Border Opacity
         * @see https://tailwindcss.com/docs/border-opacity
         */
        'border-opacity': [{
          'border-opacity': [opacity]
        }],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        'border-style': [{
          border: [].concat(getLineStyles(), ['hidden'])
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/divide-width
         */
        'divide-x': [{
          'divide-x': [borderWidth]
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        'divide-x-reverse': ['divide-x-reverse'],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/divide-width
         */
        'divide-y': [{
          'divide-y': [borderWidth]
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        'divide-y-reverse': ['divide-y-reverse'],
        /**
         * Divide Opacity
         * @see https://tailwindcss.com/docs/divide-opacity
         */
        'divide-opacity': [{
          'divide-opacity': [opacity]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/divide-style
         */
        'divide-style': [{
          divide: getLineStyles()
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color': [{
          border: [borderColor]
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color-x': [{
          'border-x': [borderColor]
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color-y': [{
          'border-y': [borderColor]
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color-t': [{
          'border-t': [borderColor]
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color-r': [{
          'border-r': [borderColor]
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color-b': [{
          'border-b': [borderColor]
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        'border-color-l': [{
          'border-l': [borderColor]
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        'divide-color': [{
          divide: [borderColor]
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        'outline-style': [{
          outline: [''].concat(getLineStyles())
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        'outline-offset': [{
          'outline-offset': [isArbitraryValue, isLength]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        'outline-w': [{
          outline: [isLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        'outline-color': [{
          outline: [colors]
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/ring-width
         */
        'ring-w': [{
          ring: getLengthWithEmpty()
        }],
        /**
         * Ring Width Inset
         * @see https://tailwindcss.com/docs/ring-width
         */
        'ring-w-inset': ['ring-inset'],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/ring-color
         */
        'ring-color': [{
          ring: [colors]
        }],
        /**
         * Ring Opacity
         * @see https://tailwindcss.com/docs/ring-opacity
         */
        'ring-opacity': [{
          'ring-opacity': [opacity]
        }],
        /**
         * Ring Offset Width
         * @see https://tailwindcss.com/docs/ring-offset-width
         */
        'ring-offset-w': [{
          'ring-offset': [isLength]
        }],
        /**
         * Ring Offset Color
         * @see https://tailwindcss.com/docs/ring-offset-color
         */
        'ring-offset-color': [{
          'ring-offset': [colors]
        }],
        // Effects
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow-color
         */
        'shadow-color': [{
          shadow: [isAny]
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [opacity]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        'mix-blend': [{
          'mix-blend': getBlendModes()
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        'bg-blend': [{
          'bg-blend': getBlendModes()
        }],
        // Filters
        /**
         * Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: ['', 'none']
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: [blur]
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [brightness]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [contrast]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        'drop-shadow': [{
          'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: [grayscale]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        'hue-rotate': [{
          'hue-rotate': [hueRotate]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: [invert]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [saturate]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: [sepia]
        }],
        /**
         * Backdrop Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        'backdrop-filter': [{
          'backdrop-filter': ['', 'none']
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        'backdrop-blur': [{
          'backdrop-blur': [blur]
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        'backdrop-brightness': [{
          'backdrop-brightness': [brightness]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        'backdrop-contrast': [{
          'backdrop-contrast': [contrast]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        'backdrop-grayscale': [{
          'backdrop-grayscale': [grayscale]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        'backdrop-hue-rotate': [{
          'backdrop-hue-rotate': [hueRotate]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        'backdrop-invert': [{
          'backdrop-invert': [invert]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        'backdrop-opacity': [{
          'backdrop-opacity': [opacity]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        'backdrop-saturate': [{
          'backdrop-saturate': [saturate]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        'backdrop-sepia': [{
          'backdrop-sepia': [sepia]
        }],
        // Tables
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        'border-collapse': [{
          border: ['collapse', 'separate']
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        'border-spacing': [{
          'border-spacing': [borderSpacing]
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        'border-spacing-x': [{
          'border-spacing-x': [borderSpacing]
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        'border-spacing-y': [{
          'border-spacing-y': [borderSpacing]
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        'table-layout': [{
          table: ['auto', 'fixed']
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ['top', 'bottom']
        }],
        // Transitions and Animation
        /**
         * Tranisition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: getNumberAndArbitrary()
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: getNumberAndArbitrary()
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
        }],
        // Transforms
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: ['', 'gpu', 'none']
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: [scale]
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        'scale-x': [{
          'scale-x': [scale]
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        'scale-y': [{
          'scale-y': [scale]
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: [isInteger, isArbitraryValue]
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        'translate-x': [{
          'translate-x': [translate]
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        'translate-y': [{
          'translate-y': [translate]
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        'skew-x': [{
          'skew-x': [skew]
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        'skew-y': [{
          'skew-y': [skew]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        'transform-origin': [{
          origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
        }],
        // Interactivity
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: ['auto', colors]
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: ['appearance-none'],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        'caret-color': [{
          caret: [colors]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        'pointer-events': [{
          'pointer-events': ['none', 'auto']
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ['none', 'y', 'x', '']
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        'scroll-behavior': [{
          scroll: ['auto', 'smooth']
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-m': [{
          'scroll-m': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-mx': [{
          'scroll-mx': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-my': [{
          'scroll-my': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-ms': [{
          'scroll-ms': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-me': [{
          'scroll-me': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-mt': [{
          'scroll-mt': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-mr': [{
          'scroll-mr': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-mb': [{
          'scroll-mb': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        'scroll-ml': [{
          'scroll-ml': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-p': [{
          'scroll-p': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-px': [{
          'scroll-px': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-py': [{
          'scroll-py': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-ps': [{
          'scroll-ps': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-pe': [{
          'scroll-pe': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-pt': [{
          'scroll-pt': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-pr': [{
          'scroll-pr': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-pb': [{
          'scroll-pb': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        'scroll-pl': [{
          'scroll-pl': getSpacingWithArbitrary()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        'snap-align': [{
          snap: ['start', 'end', 'center', 'align-none']
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        'snap-stop': [{
          snap: ['normal', 'always']
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        'snap-type': [{
          snap: ['none', 'x', 'y', 'both']
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        'snap-strictness': [{
          snap: ['mandatory', 'proximity']
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
            pan: ['x', 'left', 'right', 'y', 'up', 'down']
          }]
        }],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ['none', 'text', 'all', 'auto']
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        'will-change': [{
          'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
        }],
        // SVG
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: [colors, 'none']
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        'stroke-w': [{
          stroke: [isLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: [colors, 'none']
        }],
        // Accessibility
        /**
         * Screen Readers
         * @see https://tailwindcss.com/docs/screen-readers
         */
        sr: ['sr-only', 'not-sr-only']
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        'font-size': ['leading'],
        'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb']
      },
      conflictingClassGroupModifiers: {
        'font-size': ['leading']
      }
    };
  }

  var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

  /* node_modules\flowbite-svelte\dist\utils\Frame.svelte generated by Svelte v3.59.2 */
  const file$5 = "node_modules\\flowbite-svelte\\dist\\utils\\Frame.svelte";

  // (88:0) <svelte:element   this={tag}   use:use={options}   bind:this={node}   transition:transition={params}   {...$$restProps}   class={divClass}   on:click   on:mouseenter   on:mouseleave   on:focusin   on:focusout   {role}>
  function create_dynamic_element(ctx) {
  	let svelte_element;
  	let use_action;
  	let svelte_element_transition;
  	let current;
  	let mounted;
  	let dispose;
  	const default_slot_template = /*#slots*/ ctx[14].default;
  	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

  	let svelte_element_levels = [
  		/*$$restProps*/ ctx[8],
  		{ class: /*divClass*/ ctx[7] },
  		{ role: /*role*/ ctx[6] }
  	];

  	let svelte_element_data = {};

  	for (let i = 0; i < svelte_element_levels.length; i += 1) {
  		svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			svelte_element = element(/*tag*/ ctx[1]);
  			if (default_slot) default_slot.c();
  			set_dynamic_element_data(/*tag*/ ctx[1])(svelte_element, svelte_element_data);
  			add_location(svelte_element, file$5, 87, 0, 4136);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, svelte_element, anchor);

  			if (default_slot) {
  				default_slot.m(svelte_element, null);
  			}

  			/*svelte_element_binding*/ ctx[20](svelte_element);
  			current = true;

  			if (!mounted) {
  				dispose = [
  					action_destroyer(use_action = /*use*/ ctx[4].call(null, svelte_element, /*options*/ ctx[5])),
  					listen_dev(svelte_element, "click", /*click_handler*/ ctx[15], false, false, false, false),
  					listen_dev(svelte_element, "mouseenter", /*mouseenter_handler*/ ctx[16], false, false, false, false),
  					listen_dev(svelte_element, "mouseleave", /*mouseleave_handler*/ ctx[17], false, false, false, false),
  					listen_dev(svelte_element, "focusin", /*focusin_handler*/ ctx[18], false, false, false, false),
  					listen_dev(svelte_element, "focusout", /*focusout_handler*/ ctx[19], false, false, false, false)
  				];

  				mounted = true;
  			}
  		},
  		p: function update(new_ctx, dirty) {
  			ctx = new_ctx;

  			if (default_slot) {
  				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
  					update_slot_base(
  						default_slot,
  						default_slot_template,
  						ctx,
  						/*$$scope*/ ctx[13],
  						!current
  						? get_all_dirty_from_scope(/*$$scope*/ ctx[13])
  						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
  						null
  					);
  				}
  			}

  			set_dynamic_element_data(/*tag*/ ctx[1])(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
  				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8],
  				(!current || dirty & /*divClass*/ 128) && { class: /*divClass*/ ctx[7] },
  				(!current || dirty & /*role*/ 64) && { role: /*role*/ ctx[6] }
  			]));

  			if (use_action && is_function(use_action.update) && dirty & /*options*/ 32) use_action.update.call(null, /*options*/ ctx[5]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(default_slot, local);

  			add_render_callback(() => {
  				if (!current) return;
  				if (!svelte_element_transition) svelte_element_transition = create_bidirectional_transition(svelte_element, /*transition*/ ctx[2], /*params*/ ctx[3], true);
  				svelte_element_transition.run(1);
  			});

  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(default_slot, local);
  			if (!svelte_element_transition) svelte_element_transition = create_bidirectional_transition(svelte_element, /*transition*/ ctx[2], /*params*/ ctx[3], false);
  			svelte_element_transition.run(0);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(svelte_element);
  			if (default_slot) default_slot.d(detaching);
  			/*svelte_element_binding*/ ctx[20](null);
  			if (detaching && svelte_element_transition) svelte_element_transition.end();
  			mounted = false;
  			run_all(dispose);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_dynamic_element.name,
  		type: "child_dynamic_element",
  		source: "(88:0) <svelte:element   this={tag}   use:use={options}   bind:this={node}   transition:transition={params}   {...$$restProps}   class={divClass}   on:click   on:mouseenter   on:mouseleave   on:focusin   on:focusout   {role}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$6(ctx) {
  	let previous_tag = /*tag*/ ctx[1];
  	let svelte_element_anchor;
  	let tag_will_be_removed = false;
  	let current;
  	validate_dynamic_element(/*tag*/ ctx[1]);
  	validate_void_dynamic_element(/*tag*/ ctx[1]);
  	let svelte_element = /*tag*/ ctx[1] && create_dynamic_element(ctx);

  	const block = {
  		c: function create() {
  			if (svelte_element) svelte_element.c();
  			svelte_element_anchor = empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (svelte_element) svelte_element.m(target, anchor);
  			insert_dev(target, svelte_element_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			if (/*tag*/ ctx[1]) {
  				if (!previous_tag) {
  					svelte_element = create_dynamic_element(ctx);
  					previous_tag = /*tag*/ ctx[1];
  					svelte_element.c();
  					transition_in(svelte_element);
  					svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
  				} else if (safe_not_equal(previous_tag, /*tag*/ ctx[1])) {
  					svelte_element.d(1);
  					validate_dynamic_element(/*tag*/ ctx[1]);
  					validate_void_dynamic_element(/*tag*/ ctx[1]);
  					svelte_element = create_dynamic_element(ctx);
  					previous_tag = /*tag*/ ctx[1];
  					svelte_element.c();

  					if (tag_will_be_removed) {
  						tag_will_be_removed = false;
  						transition_in(svelte_element);
  					}

  					svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
  				} else {
  					if (tag_will_be_removed) {
  						tag_will_be_removed = false;
  						transition_in(svelte_element);
  					}

  					svelte_element.p(ctx, dirty);
  				}
  			} else if (previous_tag) {
  				tag_will_be_removed = true;
  				group_outros();

  				transition_out(svelte_element, 1, 1, () => {
  					svelte_element = null;
  					previous_tag = /*tag*/ ctx[1];
  					tag_will_be_removed = false;
  				});

  				check_outros();
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(svelte_element);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(svelte_element);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(svelte_element_anchor);
  			if (svelte_element) svelte_element.d(detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$6.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$6($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"tag","color","rounded","border","shadow","transition","params","node","use","options","role"
  	];

  	let $$restProps = compute_rest_props($$props, omit_props_names);
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('Frame', slots, ['default']);
  	const null_transition = () => ({ duration: 0 });

  	const noop = () => {
  		
  	};

  	setContext('background', true);
  	let { tag = $$restProps.href ? 'a' : 'div' } = $$props;
  	let { color = 'default' } = $$props;
  	let { rounded = false } = $$props;
  	let { border = false } = $$props;
  	let { shadow = false } = $$props;
  	let { transition = null_transition } = $$props;
  	let { params = {} } = $$props;
  	let { node = undefined } = $$props;
  	let { use = noop } = $$props;
  	let { options = {} } = $$props;
  	let { role = undefined } = $$props;

  	// your script goes here
  	const bgColors = {
  		gray: 'bg-gray-50 dark:bg-gray-800',
  		red: 'bg-red-50 dark:bg-gray-800',
  		yellow: 'bg-yellow-50 dark:bg-gray-800 ',
  		green: 'bg-green-50 dark:bg-gray-800 ',
  		indigo: 'bg-indigo-50 dark:bg-gray-800 ',
  		purple: 'bg-purple-50 dark:bg-gray-800 ',
  		pink: 'bg-pink-50 dark:bg-gray-800 ',
  		blue: 'bg-blue-50 dark:bg-gray-800 ',
  		light: 'bg-gray-50 dark:bg-gray-700',
  		dark: 'bg-gray-50 dark:bg-gray-800',
  		default: 'bg-white dark:bg-gray-800',
  		dropdown: 'bg-white dark:bg-gray-700',
  		navbar: 'bg-white dark:bg-gray-900',
  		navbarUl: 'bg-gray-50 dark:bg-gray-800',
  		form: 'bg-gray-50 dark:bg-gray-700',
  		primary: 'bg-primary-50 dark:bg-gray-800 ',
  		orange: 'bg-orange-50 dark:bg-orange-800',
  		none: ''
  	};

  	const textColors = {
  		gray: 'text-gray-800 dark:text-gray-300',
  		red: 'text-red-800 dark:text-red-400',
  		yellow: 'text-yellow-800 dark:text-yellow-300',
  		green: 'text-green-800 dark:text-green-400',
  		indigo: 'text-indigo-800 dark:text-indigo-400',
  		purple: 'text-purple-800 dark:text-purple-400',
  		pink: 'text-pink-800 dark:text-pink-400',
  		blue: 'text-blue-800 dark:text-blue-400',
  		light: 'text-gray-700 dark:text-gray-300',
  		dark: 'text-gray-700 dark:text-gray-300',
  		default: 'text-gray-500 dark:text-gray-400',
  		dropdown: 'text-gray-700 dark:text-gray-200',
  		navbar: 'text-gray-700 dark:text-gray-200',
  		navbarUl: 'text-gray-700 dark:text-gray-400',
  		form: 'text-gray-900 dark:text-white',
  		primary: 'text-primary-800 dark:text-primary-400',
  		orange: 'text-orange-800 dark:text-orange-400',
  		none: ''
  	};

  	const borderColors = {
  		gray: 'border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800',
  		red: 'border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800',
  		yellow: 'border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800',
  		green: 'border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800',
  		indigo: 'border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800',
  		purple: 'border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800',
  		pink: 'border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800',
  		blue: 'border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800',
  		light: 'border-gray-500 divide-gray-500',
  		dark: 'border-gray-500 divide-gray-500',
  		default: 'border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700',
  		dropdown: 'border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600',
  		navbar: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
  		navbarUl: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
  		form: 'border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700',
  		primary: 'border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ',
  		orange: 'border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800',
  		none: ''
  	};

  	let divClass;

  	function click_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	function mouseenter_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	function mouseleave_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	function focusin_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	function focusout_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	function svelte_element_binding($$value) {
  		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
  			node = $$value;
  			$$invalidate(0, node);
  		});
  	}

  	$$self.$$set = $$new_props => {
  		$$invalidate(26, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
  		if ('tag' in $$new_props) $$invalidate(1, tag = $$new_props.tag);
  		if ('color' in $$new_props) $$invalidate(9, color = $$new_props.color);
  		if ('rounded' in $$new_props) $$invalidate(10, rounded = $$new_props.rounded);
  		if ('border' in $$new_props) $$invalidate(11, border = $$new_props.border);
  		if ('shadow' in $$new_props) $$invalidate(12, shadow = $$new_props.shadow);
  		if ('transition' in $$new_props) $$invalidate(2, transition = $$new_props.transition);
  		if ('params' in $$new_props) $$invalidate(3, params = $$new_props.params);
  		if ('node' in $$new_props) $$invalidate(0, node = $$new_props.node);
  		if ('use' in $$new_props) $$invalidate(4, use = $$new_props.use);
  		if ('options' in $$new_props) $$invalidate(5, options = $$new_props.options);
  		if ('role' in $$new_props) $$invalidate(6, role = $$new_props.role);
  		if ('$$scope' in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		twMerge,
  		setContext,
  		null_transition,
  		noop,
  		tag,
  		color,
  		rounded,
  		border,
  		shadow,
  		transition,
  		params,
  		node,
  		use,
  		options,
  		role,
  		bgColors,
  		textColors,
  		borderColors,
  		divClass
  	});

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(26, $$props = assign(assign({}, $$props), $$new_props));
  		if ('tag' in $$props) $$invalidate(1, tag = $$new_props.tag);
  		if ('color' in $$props) $$invalidate(9, color = $$new_props.color);
  		if ('rounded' in $$props) $$invalidate(10, rounded = $$new_props.rounded);
  		if ('border' in $$props) $$invalidate(11, border = $$new_props.border);
  		if ('shadow' in $$props) $$invalidate(12, shadow = $$new_props.shadow);
  		if ('transition' in $$props) $$invalidate(2, transition = $$new_props.transition);
  		if ('params' in $$props) $$invalidate(3, params = $$new_props.params);
  		if ('node' in $$props) $$invalidate(0, node = $$new_props.node);
  		if ('use' in $$props) $$invalidate(4, use = $$new_props.use);
  		if ('options' in $$props) $$invalidate(5, options = $$new_props.options);
  		if ('role' in $$props) $$invalidate(6, role = $$new_props.role);
  		if ('divClass' in $$props) $$invalidate(7, divClass = $$new_props.divClass);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty & /*color*/ 512) {
  			$$invalidate(9, color = color ?? 'default'); // for cases when undefined
  		}

  		if ($$self.$$.dirty & /*color*/ 512) {
  			setContext('color', color);
  		}

  		$$invalidate(7, divClass = twMerge(bgColors[color], textColors[color], rounded && 'rounded-lg', border && 'border', borderColors[color], shadow && 'shadow-md', $$props.class));
  	};

  	$$props = exclude_internal_props($$props);

  	return [
  		node,
  		tag,
  		transition,
  		params,
  		use,
  		options,
  		role,
  		divClass,
  		$$restProps,
  		color,
  		rounded,
  		border,
  		shadow,
  		$$scope,
  		slots,
  		click_handler,
  		mouseenter_handler,
  		mouseleave_handler,
  		focusin_handler,
  		focusout_handler,
  		svelte_element_binding
  	];
  }

  class Frame extends SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
  			tag: 1,
  			color: 9,
  			rounded: 10,
  			border: 11,
  			shadow: 12,
  			transition: 2,
  			params: 3,
  			node: 0,
  			use: 4,
  			options: 5,
  			role: 6
  		});

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Frame",
  			options,
  			id: create_fragment$6.name
  		});
  	}

  	get tag() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set tag(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get color() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get rounded() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set rounded(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get border() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set border(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get shadow() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set shadow(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get transition() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set transition(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get params() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set params(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get node() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set node(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get use() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get options() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set options(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get role() {
  		throw new Error("<Frame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set role(value) {
  		throw new Error("<Frame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules\flowbite-svelte\dist\utils\ChevronDown.svelte generated by Svelte v3.59.2 */

  const file$4 = "node_modules\\flowbite-svelte\\dist\\utils\\ChevronDown.svelte";

  function create_fragment$5(ctx) {
  	let svg;
  	let svg_class_value;
  	let mounted;
  	let dispose;

  	let svg_levels = [
  		{ xmlns: "http://www.w3.org/2000/svg" },
  		{ width: /*size*/ ctx[0] },
  		{ height: /*size*/ ctx[0] },
  		{
  			class: svg_class_value = /*$$props*/ ctx[5].class
  		},
  		/*$$restProps*/ ctx[6],
  		{ "aria-label": /*ariaLabel*/ ctx[1] },
  		{ fill: "none" },
  		{ viewBox: /*viewBox*/ ctx[3] },
  		{ role: /*role*/ ctx[2] },
  		{ "stroke-width": "2" }
  	];

  	let svg_data = {};

  	for (let i = 0; i < svg_levels.length; i += 1) {
  		svg_data = assign(svg_data, svg_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			svg = svg_element("svg");
  			set_svg_attributes(svg, svg_data);
  			add_location(svg, file$4, 24, 0, 815);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, svg, anchor);
  			svg.innerHTML = /*svgpath*/ ctx[4];

  			if (!mounted) {
  				dispose = listen_dev(svg, "click", /*click_handler*/ ctx[9], false, false, false, false);
  				mounted = true;
  			}
  		},
  		p: function update(ctx, [dirty]) {
  			if (dirty & /*svgpath*/ 16) svg.innerHTML = /*svgpath*/ ctx[4];
  			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
  				{ xmlns: "http://www.w3.org/2000/svg" },
  				dirty & /*size*/ 1 && { width: /*size*/ ctx[0] },
  				dirty & /*size*/ 1 && { height: /*size*/ ctx[0] },
  				dirty & /*$$props*/ 32 && svg_class_value !== (svg_class_value = /*$$props*/ ctx[5].class) && { class: svg_class_value },
  				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6],
  				dirty & /*ariaLabel*/ 2 && { "aria-label": /*ariaLabel*/ ctx[1] },
  				{ fill: "none" },
  				dirty & /*viewBox*/ 8 && { viewBox: /*viewBox*/ ctx[3] },
  				dirty & /*role*/ 4 && { role: /*role*/ ctx[2] },
  				{ "stroke-width": "2" }
  			]));
  		},
  		i: noop,
  		o: noop,
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(svg);
  			mounted = false;
  			dispose();
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$5.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$5($$self, $$props, $$invalidate) {
  	const omit_props_names = ["size","color","variation","ariaLabel","role"];
  	let $$restProps = compute_rest_props($$props, omit_props_names);
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('ChevronDown', slots, []);
  	let { size = '20' } = $$props;
  	let { color = 'currentColor' } = $$props;
  	let { variation = 'outline' } = $$props;
  	let { ariaLabel = 'chevron down' } = $$props;
  	let { role = 'img' } = $$props;
  	let viewBox;
  	let svgpath;
  	let svgoutline = `<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" stroke="${color}"></path>`;
  	let svgsolid = `<path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill="${color}"></path>`;

  	function click_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	$$self.$$set = $$new_props => {
  		$$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
  		if ('size' in $$new_props) $$invalidate(0, size = $$new_props.size);
  		if ('color' in $$new_props) $$invalidate(7, color = $$new_props.color);
  		if ('variation' in $$new_props) $$invalidate(8, variation = $$new_props.variation);
  		if ('ariaLabel' in $$new_props) $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  		if ('role' in $$new_props) $$invalidate(2, role = $$new_props.role);
  	};

  	$$self.$capture_state = () => ({
  		size,
  		color,
  		variation,
  		ariaLabel,
  		role,
  		viewBox,
  		svgpath,
  		svgoutline,
  		svgsolid
  	});

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
  		if ('size' in $$props) $$invalidate(0, size = $$new_props.size);
  		if ('color' in $$props) $$invalidate(7, color = $$new_props.color);
  		if ('variation' in $$props) $$invalidate(8, variation = $$new_props.variation);
  		if ('ariaLabel' in $$props) $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  		if ('role' in $$props) $$invalidate(2, role = $$new_props.role);
  		if ('viewBox' in $$props) $$invalidate(3, viewBox = $$new_props.viewBox);
  		if ('svgpath' in $$props) $$invalidate(4, svgpath = $$new_props.svgpath);
  		if ('svgoutline' in $$props) $$invalidate(10, svgoutline = $$new_props.svgoutline);
  		if ('svgsolid' in $$props) $$invalidate(11, svgsolid = $$new_props.svgsolid);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty & /*variation*/ 256) {
  			switch (variation) {
  				case 'outline':
  					$$invalidate(4, svgpath = svgoutline);
  					$$invalidate(3, viewBox = '0 0 20 20');
  					break;
  				case 'solid':
  					$$invalidate(4, svgpath = svgsolid);
  					$$invalidate(3, viewBox = '0 0 20 20');
  					break;
  				default:
  					$$invalidate(4, svgpath = svgoutline);
  					$$invalidate(3, viewBox = '0 0 20 20');
  			}
  		}
  	};

  	$$props = exclude_internal_props($$props);

  	return [
  		size,
  		ariaLabel,
  		role,
  		viewBox,
  		svgpath,
  		$$props,
  		$$restProps,
  		color,
  		variation,
  		click_handler
  	];
  }

  class ChevronDown extends SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
  			size: 0,
  			color: 7,
  			variation: 8,
  			ariaLabel: 1,
  			role: 2
  		});

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "ChevronDown",
  			options,
  			id: create_fragment$5.name
  		});
  	}

  	get size() {
  		throw new Error("<ChevronDown>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set size(value) {
  		throw new Error("<ChevronDown>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get color() {
  		throw new Error("<ChevronDown>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<ChevronDown>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get variation() {
  		throw new Error("<ChevronDown>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set variation(value) {
  		throw new Error("<ChevronDown>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ariaLabel() {
  		throw new Error("<ChevronDown>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ariaLabel(value) {
  		throw new Error("<ChevronDown>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get role() {
  		throw new Error("<ChevronDown>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set role(value) {
  		throw new Error("<ChevronDown>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
      const o = +getComputedStyle(node).opacity;
      return {
          delay,
          duration,
          easing,
          css: t => `opacity: ${t * o}`
      };
  }

  /* node_modules\flowbite-svelte\dist\toolbar\ToolbarButton.svelte generated by Svelte v3.59.2 */
  const file$3 = "node_modules\\flowbite-svelte\\dist\\toolbar\\ToolbarButton.svelte";
  const get_default_slot_changes_1 = dirty => ({ svgSize: dirty & /*size*/ 4 });

  const get_default_slot_context_1 = ctx => ({
  	svgSize: /*svgSizes*/ ctx[5][/*size*/ ctx[2]]
  });

  const get_default_slot_changes$1 = dirty => ({ svgSize: dirty & /*size*/ 4 });

  const get_default_slot_context$1 = ctx => ({
  	svgSize: /*svgSizes*/ ctx[5][/*size*/ ctx[2]]
  });

  // (44:0) {:else}
  function create_else_block(ctx) {
  	let button;
  	let t;
  	let button_aria_label_value;
  	let current;
  	let mounted;
  	let dispose;
  	let if_block = /*name*/ ctx[0] && create_if_block_2(ctx);
  	const default_slot_template = /*#slots*/ ctx[9].default;
  	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], get_default_slot_context_1);

  	let button_levels = [
  		{ type: "button" },
  		/*$$restProps*/ ctx[6],
  		{ class: /*buttonClass*/ ctx[4] },
  		{
  			"aria-label": button_aria_label_value = /*ariaLabel*/ ctx[1] ?? /*name*/ ctx[0]
  		}
  	];

  	let button_data = {};

  	for (let i = 0; i < button_levels.length; i += 1) {
  		button_data = assign(button_data, button_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			button = element("button");
  			if (if_block) if_block.c();
  			t = space();
  			if (default_slot) default_slot.c();
  			set_attributes(button, button_data);
  			add_location(button, file$3, 44, 2, 2309);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, button, anchor);
  			if (if_block) if_block.m(button, null);
  			append_dev(button, t);

  			if (default_slot) {
  				default_slot.m(button, null);
  			}

  			if (button.autofocus) button.focus();
  			current = true;

  			if (!mounted) {
  				dispose = listen_dev(button, "click", /*click_handler*/ ctx[10], false, false, false, false);
  				mounted = true;
  			}
  		},
  		p: function update(ctx, dirty) {
  			if (/*name*/ ctx[0]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);
  				} else {
  					if_block = create_if_block_2(ctx);
  					if_block.c();
  					if_block.m(button, t);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}

  			if (default_slot) {
  				if (default_slot.p && (!current || dirty & /*$$scope, size*/ 260)) {
  					update_slot_base(
  						default_slot,
  						default_slot_template,
  						ctx,
  						/*$$scope*/ ctx[8],
  						!current
  						? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
  						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, get_default_slot_changes_1),
  						get_default_slot_context_1
  					);
  				}
  			}

  			set_attributes(button, button_data = get_spread_update(button_levels, [
  				{ type: "button" },
  				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6],
  				(!current || dirty & /*buttonClass*/ 16) && { class: /*buttonClass*/ ctx[4] },
  				(!current || dirty & /*ariaLabel, name*/ 3 && button_aria_label_value !== (button_aria_label_value = /*ariaLabel*/ ctx[1] ?? /*name*/ ctx[0])) && { "aria-label": button_aria_label_value }
  			]));
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(button);
  			if (if_block) if_block.d();
  			if (default_slot) default_slot.d(detaching);
  			mounted = false;
  			dispose();
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_else_block.name,
  		type: "else",
  		source: "(44:0) {:else}",
  		ctx
  	});

  	return block;
  }

  // (39:0) {#if href}
  function create_if_block$2(ctx) {
  	let a;
  	let t;
  	let a_aria_label_value;
  	let current;
  	let if_block = /*name*/ ctx[0] && create_if_block_1$2(ctx);
  	const default_slot_template = /*#slots*/ ctx[9].default;
  	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], get_default_slot_context$1);

  	let a_levels = [
  		{ href: /*href*/ ctx[3] },
  		/*$$restProps*/ ctx[6],
  		{ class: /*buttonClass*/ ctx[4] },
  		{
  			"aria-label": a_aria_label_value = /*ariaLabel*/ ctx[1] ?? /*name*/ ctx[0]
  		}
  	];

  	let a_data = {};

  	for (let i = 0; i < a_levels.length; i += 1) {
  		a_data = assign(a_data, a_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			a = element("a");
  			if (if_block) if_block.c();
  			t = space();
  			if (default_slot) default_slot.c();
  			set_attributes(a, a_data);
  			add_location(a, file$3, 39, 2, 2120);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, a, anchor);
  			if (if_block) if_block.m(a, null);
  			append_dev(a, t);

  			if (default_slot) {
  				default_slot.m(a, null);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (/*name*/ ctx[0]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);
  				} else {
  					if_block = create_if_block_1$2(ctx);
  					if_block.c();
  					if_block.m(a, t);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}

  			if (default_slot) {
  				if (default_slot.p && (!current || dirty & /*$$scope, size*/ 260)) {
  					update_slot_base(
  						default_slot,
  						default_slot_template,
  						ctx,
  						/*$$scope*/ ctx[8],
  						!current
  						? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
  						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, get_default_slot_changes$1),
  						get_default_slot_context$1
  					);
  				}
  			}

  			set_attributes(a, a_data = get_spread_update(a_levels, [
  				(!current || dirty & /*href*/ 8) && { href: /*href*/ ctx[3] },
  				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6],
  				(!current || dirty & /*buttonClass*/ 16) && { class: /*buttonClass*/ ctx[4] },
  				(!current || dirty & /*ariaLabel, name*/ 3 && a_aria_label_value !== (a_aria_label_value = /*ariaLabel*/ ctx[1] ?? /*name*/ ctx[0])) && { "aria-label": a_aria_label_value }
  			]));
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(a);
  			if (if_block) if_block.d();
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block$2.name,
  		type: "if",
  		source: "(39:0) {#if href}",
  		ctx
  	});

  	return block;
  }

  // (46:4) {#if name}
  function create_if_block_2(ctx) {
  	let span;
  	let t;

  	const block = {
  		c: function create() {
  			span = element("span");
  			t = text(/*name*/ ctx[0]);
  			attr_dev(span, "class", "sr-only");
  			add_location(span, file$3, 45, 14, 2423);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, span, anchor);
  			append_dev(span, t);
  		},
  		p: function update(ctx, dirty) {
  			if (dirty & /*name*/ 1) set_data_dev(t, /*name*/ ctx[0]);
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(span);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block_2.name,
  		type: "if",
  		source: "(46:4) {#if name}",
  		ctx
  	});

  	return block;
  }

  // (41:4) {#if name}
  function create_if_block_1$2(ctx) {
  	let span;
  	let t;

  	const block = {
  		c: function create() {
  			span = element("span");
  			t = text(/*name*/ ctx[0]);
  			attr_dev(span, "class", "sr-only");
  			add_location(span, file$3, 40, 14, 2213);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, span, anchor);
  			append_dev(span, t);
  		},
  		p: function update(ctx, dirty) {
  			if (dirty & /*name*/ 1) set_data_dev(t, /*name*/ ctx[0]);
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(span);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block_1$2.name,
  		type: "if",
  		source: "(41:4) {#if name}",
  		ctx
  	});

  	return block;
  }

  function create_fragment$4(ctx) {
  	let current_block_type_index;
  	let if_block;
  	let if_block_anchor;
  	let current;
  	const if_block_creators = [create_if_block$2, create_else_block];
  	const if_blocks = [];

  	function select_block_type(ctx, dirty) {
  		if (/*href*/ ctx[3]) return 0;
  		return 1;
  	}

  	current_block_type_index = select_block_type(ctx);
  	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

  	const block = {
  		c: function create() {
  			if_block.c();
  			if_block_anchor = empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if_blocks[current_block_type_index].m(target, anchor);
  			insert_dev(target, if_block_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			let previous_block_index = current_block_type_index;
  			current_block_type_index = select_block_type(ctx);

  			if (current_block_type_index === previous_block_index) {
  				if_blocks[current_block_type_index].p(ctx, dirty);
  			} else {
  				group_outros();

  				transition_out(if_blocks[previous_block_index], 1, 1, () => {
  					if_blocks[previous_block_index] = null;
  				});

  				check_outros();
  				if_block = if_blocks[current_block_type_index];

  				if (!if_block) {
  					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  					if_block.c();
  				} else {
  					if_block.p(ctx, dirty);
  				}

  				transition_in(if_block, 1);
  				if_block.m(if_block_anchor.parentNode, if_block_anchor);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(if_block);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(if_block);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if_blocks[current_block_type_index].d(detaching);
  			if (detaching) detach_dev(if_block_anchor);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$4.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
  	const omit_props_names = ["color","name","ariaLabel","size","href"];
  	let $$restProps = compute_rest_props($$props, omit_props_names);
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('ToolbarButton', slots, ['default']);
  	const background = getContext('background');
  	let { color = 'default' } = $$props;
  	let { name = undefined } = $$props;
  	let { ariaLabel = undefined } = $$props;
  	let { size = 'md' } = $$props;
  	let { href = undefined } = $$props;

  	const colors = {
  		dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
  		gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300',
  		red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300',
  		yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
  		green: 'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300',
  		indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
  		purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300',
  		pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300',
  		blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300',
  		primary: 'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300',
  		default: 'focus:ring-gray-400'
  	};

  	const sizing = {
  		xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
  		sm: 'm-0.5 rounded focus:ring-1 p-0.5',
  		md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
  		lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
  	};

  	let buttonClass;

  	const svgSizes = {
  		xs: 'w-3 h-3',
  		sm: 'w-3.5 h-3.5',
  		md: 'w-5 h-5',
  		lg: 'w-5 h-5'
  	};

  	function click_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	$$self.$$set = $$new_props => {
  		$$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
  		if ('color' in $$new_props) $$invalidate(7, color = $$new_props.color);
  		if ('name' in $$new_props) $$invalidate(0, name = $$new_props.name);
  		if ('ariaLabel' in $$new_props) $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  		if ('size' in $$new_props) $$invalidate(2, size = $$new_props.size);
  		if ('href' in $$new_props) $$invalidate(3, href = $$new_props.href);
  		if ('$$scope' in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		getContext,
  		twMerge,
  		background,
  		color,
  		name,
  		ariaLabel,
  		size,
  		href,
  		colors,
  		sizing,
  		buttonClass,
  		svgSizes
  	});

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(14, $$props = assign(assign({}, $$props), $$new_props));
  		if ('color' in $$props) $$invalidate(7, color = $$new_props.color);
  		if ('name' in $$props) $$invalidate(0, name = $$new_props.name);
  		if ('ariaLabel' in $$props) $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  		if ('size' in $$props) $$invalidate(2, size = $$new_props.size);
  		if ('href' in $$props) $$invalidate(3, href = $$new_props.href);
  		if ('buttonClass' in $$props) $$invalidate(4, buttonClass = $$new_props.buttonClass);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		$$invalidate(4, buttonClass = twMerge(
  			'focus:outline-none whitespace-normal',
  			sizing[size],
  			colors[color],
  			color === 'default' && (background
  			? 'hover:bg-gray-100 dark:hover:bg-gray-600'
  			: 'hover:bg-gray-100 dark:hover:bg-gray-700'),
  			$$props.class
  		));
  	};

  	$$props = exclude_internal_props($$props);

  	return [
  		name,
  		ariaLabel,
  		size,
  		href,
  		buttonClass,
  		svgSizes,
  		$$restProps,
  		color,
  		$$scope,
  		slots,
  		click_handler
  	];
  }

  class ToolbarButton extends SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
  			color: 7,
  			name: 0,
  			ariaLabel: 1,
  			size: 2,
  			href: 3
  		});

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "ToolbarButton",
  			options,
  			id: create_fragment$4.name
  		});
  	}

  	get color() {
  		throw new Error("<ToolbarButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<ToolbarButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get name() {
  		throw new Error("<ToolbarButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set name(value) {
  		throw new Error("<ToolbarButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ariaLabel() {
  		throw new Error("<ToolbarButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ariaLabel(value) {
  		throw new Error("<ToolbarButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get size() {
  		throw new Error("<ToolbarButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set size(value) {
  		throw new Error("<ToolbarButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get href() {
  		throw new Error("<ToolbarButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set href(value) {
  		throw new Error("<ToolbarButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules\flowbite-svelte\dist\utils\CloseButton.svelte generated by Svelte v3.59.2 */
  const file$2 = "node_modules\\flowbite-svelte\\dist\\utils\\CloseButton.svelte";

  // (6:0) <ToolbarButton on:click {name} {...$$restProps} class={twMerge('ml-auto', $$props.class)} let:svgSize>
  function create_default_slot$2(ctx) {
  	let svg;
  	let path;
  	let svg_class_value;

  	const block = {
  		c: function create() {
  			svg = svg_element("svg");
  			path = svg_element("path");
  			attr_dev(path, "fill-rule", "evenodd");
  			attr_dev(path, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z");
  			attr_dev(path, "clip-rule", "evenodd");
  			add_location(path, file$2, 7, 4, 355);
  			attr_dev(svg, "class", svg_class_value = /*svgSize*/ ctx[4]);
  			attr_dev(svg, "fill", "currentColor");
  			attr_dev(svg, "viewBox", "0 0 20 20");
  			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
  			add_location(svg, file$2, 6, 2, 254);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, svg, anchor);
  			append_dev(svg, path);
  		},
  		p: function update(ctx, dirty) {
  			if (dirty & /*svgSize*/ 16 && svg_class_value !== (svg_class_value = /*svgSize*/ ctx[4])) {
  				attr_dev(svg, "class", svg_class_value);
  			}
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(svg);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$2.name,
  		type: "slot",
  		source: "(6:0) <ToolbarButton on:click {name} {...$$restProps} class={twMerge('ml-auto', $$props.class)} let:svgSize>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$3(ctx) {
  	let toolbarbutton;
  	let current;

  	const toolbarbutton_spread_levels = [
  		{ name: /*name*/ ctx[0] },
  		/*$$restProps*/ ctx[1],
  		{
  			class: twMerge('ml-auto', /*$$props*/ ctx[2].class)
  		}
  	];

  	let toolbarbutton_props = {
  		$$slots: {
  			default: [
  				create_default_slot$2,
  				({ svgSize }) => ({ 4: svgSize }),
  				({ svgSize }) => svgSize ? 16 : 0
  			]
  		},
  		$$scope: { ctx }
  	};

  	for (let i = 0; i < toolbarbutton_spread_levels.length; i += 1) {
  		toolbarbutton_props = assign(toolbarbutton_props, toolbarbutton_spread_levels[i]);
  	}

  	toolbarbutton = new ToolbarButton({
  			props: toolbarbutton_props,
  			$$inline: true
  		});

  	toolbarbutton.$on("click", /*click_handler*/ ctx[3]);

  	const block = {
  		c: function create() {
  			create_component(toolbarbutton.$$.fragment);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			mount_component(toolbarbutton, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const toolbarbutton_changes = (dirty & /*name, $$restProps, twMerge, $$props*/ 7)
  			? get_spread_update(toolbarbutton_spread_levels, [
  					dirty & /*name*/ 1 && { name: /*name*/ ctx[0] },
  					dirty & /*$$restProps*/ 2 && get_spread_object(/*$$restProps*/ ctx[1]),
  					dirty & /*twMerge, $$props*/ 4 && {
  						class: twMerge('ml-auto', /*$$props*/ ctx[2].class)
  					}
  				])
  			: {};

  			if (dirty & /*$$scope, svgSize*/ 48) {
  				toolbarbutton_changes.$$scope = { dirty, ctx };
  			}

  			toolbarbutton.$set(toolbarbutton_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(toolbarbutton.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(toolbarbutton.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			destroy_component(toolbarbutton, detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$3.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
  	const omit_props_names = ["name"];
  	let $$restProps = compute_rest_props($$props, omit_props_names);
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('CloseButton', slots, []);
  	let { name = 'Close' } = $$props;

  	function click_handler(event) {
  		bubble.call(this, $$self, event);
  	}

  	$$self.$$set = $$new_props => {
  		$$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
  		if ('name' in $$new_props) $$invalidate(0, name = $$new_props.name);
  	};

  	$$self.$capture_state = () => ({ twMerge, ToolbarButton, name });

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
  		if ('name' in $$props) $$invalidate(0, name = $$new_props.name);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$props = exclude_internal_props($$props);
  	return [name, $$restProps, $$props, click_handler];
  }

  class CloseButton extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$3, create_fragment$3, safe_not_equal, { name: 0 });

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "CloseButton",
  			options,
  			id: create_fragment$3.name
  		});
  	}

  	get name() {
  		throw new Error("<CloseButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set name(value) {
  		throw new Error("<CloseButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules\flowbite-svelte\dist\badges\Badge.svelte generated by Svelte v3.59.2 */
  const get_close_button_slot_changes = dirty => ({});
  const get_close_button_slot_context = ctx => ({ close: /*close*/ ctx[5] });

  // (75:0) {#if open}
  function create_if_block$1(ctx) {
  	let frame;
  	let current;
  	const frame_spread_levels = [/*$$restProps*/ ctx[6], { class: /*badgeClass*/ ctx[3] }];

  	let frame_props = {
  		$$slots: { default: [create_default_slot$1] },
  		$$scope: { ctx }
  	};

  	for (let i = 0; i < frame_spread_levels.length; i += 1) {
  		frame_props = assign(frame_props, frame_spread_levels[i]);
  	}

  	frame = new Frame({ props: frame_props, $$inline: true });

  	const block = {
  		c: function create() {
  			create_component(frame.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			mount_component(frame, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const frame_changes = (dirty & /*$$restProps, badgeClass*/ 72)
  			? get_spread_update(frame_spread_levels, [
  					dirty & /*$$restProps*/ 64 && get_spread_object(/*$$restProps*/ ctx[6]),
  					dirty & /*badgeClass*/ 8 && { class: /*badgeClass*/ ctx[3] }
  				])
  			: {};

  			if (dirty & /*$$scope, color, large, dismissable*/ 263) {
  				frame_changes.$$scope = { dirty, ctx };
  			}

  			frame.$set(frame_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(frame.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(frame.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			destroy_component(frame, detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block$1.name,
  		type: "if",
  		source: "(75:0) {#if open}",
  		ctx
  	});

  	return block;
  }

  // (78:4) {#if dismissable}
  function create_if_block_1$1(ctx) {
  	let current;
  	const close_button_slot_template = /*#slots*/ ctx[7]["close-button"];
  	const close_button_slot = create_slot(close_button_slot_template, ctx, /*$$scope*/ ctx[8], get_close_button_slot_context);
  	const close_button_slot_or_fallback = close_button_slot || fallback_block$1(ctx);

  	const block = {
  		c: function create() {
  			if (close_button_slot_or_fallback) close_button_slot_or_fallback.c();
  		},
  		m: function mount(target, anchor) {
  			if (close_button_slot_or_fallback) {
  				close_button_slot_or_fallback.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (close_button_slot) {
  				if (close_button_slot.p && (!current || dirty & /*$$scope*/ 256)) {
  					update_slot_base(
  						close_button_slot,
  						close_button_slot_template,
  						ctx,
  						/*$$scope*/ ctx[8],
  						!current
  						? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
  						: get_slot_changes(close_button_slot_template, /*$$scope*/ ctx[8], dirty, get_close_button_slot_changes),
  						get_close_button_slot_context
  					);
  				}
  			} else {
  				if (close_button_slot_or_fallback && close_button_slot_or_fallback.p && (!current || dirty & /*color, large*/ 3)) {
  					close_button_slot_or_fallback.p(ctx, !current ? -1 : dirty);
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(close_button_slot_or_fallback, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(close_button_slot_or_fallback, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (close_button_slot_or_fallback) close_button_slot_or_fallback.d(detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block_1$1.name,
  		type: "if",
  		source: "(78:4) {#if dismissable}",
  		ctx
  	});

  	return block;
  }

  // (79:40)          
  function fallback_block$1(ctx) {
  	let closebutton;
  	let current;

  	closebutton = new CloseButton({
  			props: {
  				color: /*color*/ ctx[0],
  				size: /*large*/ ctx[1] ? 'sm' : 'xs',
  				name: "Remove badge",
  				class: "ml-1.5 -mr-1.5"
  			},
  			$$inline: true
  		});

  	closebutton.$on("click", /*close*/ ctx[5]);

  	const block = {
  		c: function create() {
  			create_component(closebutton.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			mount_component(closebutton, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const closebutton_changes = {};
  			if (dirty & /*color*/ 1) closebutton_changes.color = /*color*/ ctx[0];
  			if (dirty & /*large*/ 2) closebutton_changes.size = /*large*/ ctx[1] ? 'sm' : 'xs';
  			closebutton.$set(closebutton_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(closebutton.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(closebutton.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			destroy_component(closebutton, detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: fallback_block$1.name,
  		type: "fallback",
  		source: "(79:40)          ",
  		ctx
  	});

  	return block;
  }

  // (76:2) <Frame {...$$restProps} class={badgeClass}>
  function create_default_slot$1(ctx) {
  	let t;
  	let if_block_anchor;
  	let current;
  	const default_slot_template = /*#slots*/ ctx[7].default;
  	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
  	let if_block = /*dismissable*/ ctx[2] && create_if_block_1$1(ctx);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  			t = space();
  			if (if_block) if_block.c();
  			if_block_anchor = empty();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			insert_dev(target, t, anchor);
  			if (if_block) if_block.m(target, anchor);
  			insert_dev(target, if_block_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && (!current || dirty & /*$$scope*/ 256)) {
  					update_slot_base(
  						default_slot,
  						default_slot_template,
  						ctx,
  						/*$$scope*/ ctx[8],
  						!current
  						? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
  						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, null),
  						null
  					);
  				}
  			}

  			if (/*dismissable*/ ctx[2]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);

  					if (dirty & /*dismissable*/ 4) {
  						transition_in(if_block, 1);
  					}
  				} else {
  					if_block = create_if_block_1$1(ctx);
  					if_block.c();
  					transition_in(if_block, 1);
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				group_outros();

  				transition_out(if_block, 1, 1, () => {
  					if_block = null;
  				});

  				check_outros();
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(default_slot, local);
  			transition_in(if_block);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(default_slot, local);
  			transition_out(if_block);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  			if (detaching) detach_dev(t);
  			if (if_block) if_block.d(detaching);
  			if (detaching) detach_dev(if_block_anchor);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$1.name,
  		type: "slot",
  		source: "(76:2) <Frame {...$$restProps} class={badgeClass}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$2(ctx) {
  	let if_block_anchor;
  	let current;
  	let if_block = /*open*/ ctx[4] && create_if_block$1(ctx);

  	const block = {
  		c: function create() {
  			if (if_block) if_block.c();
  			if_block_anchor = empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			insert_dev(target, if_block_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			if (/*open*/ ctx[4]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);

  					if (dirty & /*open*/ 16) {
  						transition_in(if_block, 1);
  					}
  				} else {
  					if_block = create_if_block$1(ctx);
  					if_block.c();
  					transition_in(if_block, 1);
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				group_outros();

  				transition_out(if_block, 1, 1, () => {
  					if_block = null;
  				});

  				check_outros();
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(if_block);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(if_block);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);
  			if (detaching) detach_dev(if_block_anchor);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$2.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const baseClass = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

  function instance$2($$self, $$props, $$invalidate) {
  	const omit_props_names = ["color","large","dismissable"];
  	let $$restProps = compute_rest_props($$props, omit_props_names);
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('Badge', slots, ['default','close-button']);
  	let { color = 'primary' } = $$props;
  	let { large = false } = $$props;
  	let { dismissable = false } = $$props;

  	const colors = {
  		primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
  		blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  		gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  		red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  		green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  		pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  		none: ''
  	};

  	const borderedColors = {
  		primary: 'bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400',
  		blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400',
  		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500',
  		red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400',
  		green: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400',
  		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300',
  		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400',
  		purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400',
  		pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400',
  		none: ''
  	};

  	const hoverColors = {
  		primary: 'hover:bg-primary-200',
  		blue: 'hover:bg-blue-200',
  		dark: 'hover:bg-gray-200',
  		red: 'hover:bg-red-200',
  		green: 'hover:bg-green-200',
  		yellow: 'hover:bg-yellow-200',
  		indigo: 'hover:bg-indigo-200',
  		purple: 'hover:bg-purple-200',
  		pink: 'hover:bg-pink-200',
  		none: ''
  	};

  	let badgeClass;

  	// only overwrite necessary colors (<CloseButton> v0.29.10)
  	const closeBtnColors = {
  		primary: 'text-primary-400 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-300',
  		blue: 'text-blue-400 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
  		dark: 'text-gray-400 hover:text-gray-400 hover:bg-gray-600 dark:hover:text-gray-300',
  		red: 'text-red-400 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300',
  		green: 'text-green-400 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300',
  		yellow: 'text-yellow-400 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
  		indigo: 'text-indigo-400 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
  		purple: 'text-purple-400 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300',
  		pink: 'text-pink-400 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300',
  		none: ''
  	};

  	let open = true;
  	const dispatch = createEventDispatcher();

  	const close = e => {
  		e.stopPropagation();
  		$$invalidate(4, open = false);
  		dispatch('dismiss');
  	};

  	$$self.$$set = $$new_props => {
  		$$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
  		if ('color' in $$new_props) $$invalidate(0, color = $$new_props.color);
  		if ('large' in $$new_props) $$invalidate(1, large = $$new_props.large);
  		if ('dismissable' in $$new_props) $$invalidate(2, dismissable = $$new_props.dismissable);
  		if ('$$scope' in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		createEventDispatcher,
  		twMerge,
  		twJoin,
  		CloseButton,
  		fade,
  		Frame,
  		color,
  		large,
  		dismissable,
  		colors,
  		borderedColors,
  		hoverColors,
  		baseClass,
  		badgeClass,
  		closeBtnColors,
  		open,
  		dispatch,
  		close
  	});

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(14, $$props = assign(assign({}, $$props), $$new_props));
  		if ('color' in $$props) $$invalidate(0, color = $$new_props.color);
  		if ('large' in $$props) $$invalidate(1, large = $$new_props.large);
  		if ('dismissable' in $$props) $$invalidate(2, dismissable = $$new_props.dismissable);
  		if ('badgeClass' in $$props) $$invalidate(3, badgeClass = $$new_props.badgeClass);
  		if ('open' in $$props) $$invalidate(4, open = $$new_props.open);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		{
  			if (dismissable) $$invalidate(6, $$restProps.transition = $$restProps.transition ?? fade, $$restProps);
  		}

  		$$invalidate(3, badgeClass = twMerge(
  			baseClass,
  			large ? 'text-sm' : 'text-xs',
  			$$restProps.border
  			? `border ${borderedColors[color]}`
  			: colors[color],
  			$$restProps.href && hoverColors[color],
  			$$restProps.rounded ? 'rounded-full' : 'rounded',
  			$$props.class
  		));
  	};

  	$$props = exclude_internal_props($$props);

  	return [
  		color,
  		large,
  		dismissable,
  		badgeClass,
  		open,
  		close,
  		$$restProps,
  		slots,
  		$$scope
  	];
  }

  class Badge extends SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		init(this, options, instance$2, create_fragment$2, safe_not_equal, { color: 0, large: 1, dismissable: 2 });

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Badge",
  			options,
  			id: create_fragment$2.name
  		});
  	}

  	get color() {
  		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get large() {
  		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set large(value) {
  		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get dismissable() {
  		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set dismissable(value) {
  		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var css_248z$1 = "";
  styleInject(css_248z$1);

  var css_248z = "";
  styleInject(css_248z);

  /* node_modules\flowbite-svelte\dist\forms\MultiSelect.svelte generated by Svelte v3.59.2 */
  const file$1 = "node_modules\\flowbite-svelte\\dist\\forms\\MultiSelect.svelte";

  function get_each_context(ctx, list, i) {
  	const child_ctx = ctx.slice();
  	child_ctx[21] = list[i];
  	return child_ctx;
  }

  function get_each_context_1(ctx, list, i) {
  	const child_ctx = ctx.slice();
  	child_ctx[21] = list[i];

  	child_ctx[26] = function func() {
  		return /*func*/ child_ctx[14](/*item*/ child_ctx[21]);
  	};

  	return child_ctx;
  }

  const get_default_slot_changes = dirty => ({
  	item: dirty & /*selectItems*/ 4,
  	clear: dirty & /*selectItems*/ 4
  });

  const get_default_slot_context = ctx => ({
  	item: /*item*/ ctx[21],
  	clear: /*func_func*/ ctx[26]
  });

  // (74:4) {#if selectItems.length}
  function create_if_block_1(ctx) {
  	let each_blocks = [];
  	let each_1_lookup = new Map();
  	let each_1_anchor;
  	let current;
  	let each_value_1 = /*selectItems*/ ctx[2];
  	validate_each_argument(each_value_1);
  	const get_key = ctx => /*item*/ ctx[21].name;
  	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

  	for (let i = 0; i < each_value_1.length; i += 1) {
  		let child_ctx = get_each_context_1(ctx, each_value_1, i);
  		let key = get_key(child_ctx);
  		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
  	}

  	const block = {
  		c: function create() {
  			for (let i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			each_1_anchor = empty();
  		},
  		m: function mount(target, anchor) {
  			for (let i = 0; i < each_blocks.length; i += 1) {
  				if (each_blocks[i]) {
  					each_blocks[i].m(target, anchor);
  				}
  			}

  			insert_dev(target, each_1_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (dirty & /*size, clearThisOption, selectItems, $$scope*/ 524806) {
  				each_value_1 = /*selectItems*/ ctx[2];
  				validate_each_argument(each_value_1);
  				group_outros();
  				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
  				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
  				check_outros();
  			}
  		},
  		i: function intro(local) {
  			if (current) return;

  			for (let i = 0; i < each_value_1.length; i += 1) {
  				transition_in(each_blocks[i]);
  			}

  			current = true;
  		},
  		o: function outro(local) {
  			for (let i = 0; i < each_blocks.length; i += 1) {
  				transition_out(each_blocks[i]);
  			}

  			current = false;
  		},
  		d: function destroy(detaching) {
  			for (let i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].d(detaching);
  			}

  			if (detaching) detach_dev(each_1_anchor);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block_1.name,
  		type: "if",
  		source: "(74:4) {#if selectItems.length}",
  		ctx
  	});

  	return block;
  }

  // (77:10) <Badge             color="dark"             large={size === 'lg'}             dismissable             params={{ duration: 100 }}             on:dismiss={() => clearThisOption(item)}>
  function create_default_slot(ctx) {
  	let t_value = /*item*/ ctx[21].name + "";
  	let t;

  	const block = {
  		c: function create() {
  			t = text(t_value);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, t, anchor);
  		},
  		p: function update(ctx, dirty) {
  			if (dirty & /*selectItems*/ 4 && t_value !== (t_value = /*item*/ ctx[21].name + "")) set_data_dev(t, t_value);
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(t);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot.name,
  		type: "slot",
  		source: "(77:10) <Badge             color=\\\"dark\\\"             large={size === 'lg'}             dismissable             params={{ duration: 100 }}             on:dismiss={() => clearThisOption(item)}>",
  		ctx
  	});

  	return block;
  }

  // (76:57)            
  function fallback_block(ctx) {
  	let badge;
  	let t;
  	let current;

  	function dismiss_handler() {
  		return /*dismiss_handler*/ ctx[15](/*item*/ ctx[21]);
  	}

  	badge = new Badge({
  			props: {
  				color: "dark",
  				large: /*size*/ ctx[1] === 'lg',
  				dismissable: true,
  				params: { duration: 100 },
  				$$slots: { default: [create_default_slot] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	badge.$on("dismiss", dismiss_handler);

  	const block = {
  		c: function create() {
  			create_component(badge.$$.fragment);
  			t = space();
  		},
  		m: function mount(target, anchor) {
  			mount_component(badge, target, anchor);
  			insert_dev(target, t, anchor);
  			current = true;
  		},
  		p: function update(new_ctx, dirty) {
  			ctx = new_ctx;
  			const badge_changes = {};
  			if (dirty & /*size*/ 2) badge_changes.large = /*size*/ ctx[1] === 'lg';

  			if (dirty & /*$$scope, selectItems*/ 524292) {
  				badge_changes.$$scope = { dirty, ctx };
  			}

  			badge.$set(badge_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(badge.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(badge.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			destroy_component(badge, detaching);
  			if (detaching) detach_dev(t);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: fallback_block.name,
  		type: "fallback",
  		source: "(76:57)            ",
  		ctx
  	});

  	return block;
  }

  // (75:6) {#each selectItems as item (item.name)}
  function create_each_block_1(key_1, ctx) {
  	let first;
  	let current;
  	const default_slot_template = /*#slots*/ ctx[13].default;
  	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[19], get_default_slot_context);
  	const default_slot_or_fallback = default_slot || fallback_block(ctx);

  	const block = {
  		key: key_1,
  		first: null,
  		c: function create() {
  			first = empty();
  			if (default_slot_or_fallback) default_slot_or_fallback.c();
  			this.first = first;
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, first, anchor);

  			if (default_slot_or_fallback) {
  				default_slot_or_fallback.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(new_ctx, dirty) {
  			ctx = new_ctx;

  			if (default_slot) {
  				if (default_slot.p && (!current || dirty & /*$$scope, selectItems*/ 524292)) {
  					update_slot_base(
  						default_slot,
  						default_slot_template,
  						ctx,
  						/*$$scope*/ ctx[19],
  						!current
  						? get_all_dirty_from_scope(/*$$scope*/ ctx[19])
  						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[19], dirty, get_default_slot_changes),
  						get_default_slot_context
  					);
  				}
  			} else {
  				if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*size, selectItems*/ 6)) {
  					default_slot_or_fallback.p(ctx, !current ? -1 : dirty);
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(default_slot_or_fallback, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(default_slot_or_fallback, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(first);
  			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_each_block_1.name,
  		type: "each",
  		source: "(75:6) {#each selectItems as item (item.name)}",
  		ctx
  	});

  	return block;
  }

  // (97:2) {#if show}
  function create_if_block(ctx) {
  	let div;
  	let each_blocks = [];
  	let each_1_lookup = new Map();
  	let each_value = /*items*/ ctx[0];
  	validate_each_argument(each_value);
  	const get_key = ctx => /*item*/ ctx[21].name;
  	validate_each_keys(ctx, each_value, get_each_context, get_key);

  	for (let i = 0; i < each_value.length; i += 1) {
  		let child_ctx = get_each_context(ctx, each_value, i);
  		let key = get_key(child_ctx);
  		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  	}

  	const block = {
  		c: function create() {
  			div = element("div");

  			for (let i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].c();
  			}

  			attr_dev(div, "class", /*multiSelectDropdown*/ ctx[4]);
  			add_location(div, file$1, 97, 4, 3251);
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, div, anchor);

  			for (let i = 0; i < each_blocks.length; i += 1) {
  				if (each_blocks[i]) {
  					each_blocks[i].m(div, null);
  				}
  			}
  		},
  		p: function update(ctx, dirty) {
  			if (dirty & /*twMerge, itemsClass, selectItems, items, itemsSelectClass, selectOption*/ 133) {
  				each_value = /*items*/ ctx[0];
  				validate_each_argument(each_value);
  				validate_each_keys(ctx, each_value, get_each_context, get_key);
  				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
  			}

  			if (dirty & /*multiSelectDropdown*/ 16) {
  				attr_dev(div, "class", /*multiSelectDropdown*/ ctx[4]);
  			}
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(div);

  			for (let i = 0; i < each_blocks.length; i += 1) {
  				each_blocks[i].d();
  			}
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block.name,
  		type: "if",
  		source: "(97:2) {#if show}",
  		ctx
  	});

  	return block;
  }

  // (99:6) {#each items as item (item.name)}
  function create_each_block(key_1, ctx) {
  	let div;
  	let t0_value = /*item*/ ctx[21].name + "";
  	let t0;
  	let t1;
  	let div_class_value;
  	let mounted;
  	let dispose;

  	function click_handler(...args) {
  		return /*click_handler*/ ctx[16](/*item*/ ctx[21], ...args);
  	}

  	const block = {
  		key: key_1,
  		first: null,
  		c: function create() {
  			div = element("div");
  			t0 = text(t0_value);
  			t1 = space();
  			attr_dev(div, "role", "presentation");
  			attr_dev(div, "class", div_class_value = twMerge(itemsClass, /*selectItems*/ ctx[2].includes(/*item*/ ctx[21]) && itemsSelectClass));
  			add_location(div, file$1, 100, 8, 3398);
  			this.first = div;
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, div, anchor);
  			append_dev(div, t0);
  			append_dev(div, t1);

  			if (!mounted) {
  				dispose = listen_dev(div, "click", stop_propagation(click_handler), false, false, true, false);
  				mounted = true;
  			}
  		},
  		p: function update(new_ctx, dirty) {
  			ctx = new_ctx;
  			if (dirty & /*items*/ 1 && t0_value !== (t0_value = /*item*/ ctx[21].name + "")) set_data_dev(t0, t0_value);

  			if (dirty & /*selectItems, items*/ 5 && div_class_value !== (div_class_value = twMerge(itemsClass, /*selectItems*/ ctx[2].includes(/*item*/ ctx[21]) && itemsSelectClass))) {
  				attr_dev(div, "class", div_class_value);
  			}
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(div);
  			mounted = false;
  			dispose();
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_each_block.name,
  		type: "each",
  		source: "(99:6) {#each items as item (item.name)}",
  		ctx
  	});

  	return block;
  }

  function create_fragment$1(ctx) {
  	let div2;
  	let span;
  	let t0;
  	let div1;
  	let closebutton;
  	let t1;
  	let div0;
  	let t2;
  	let button;
  	let chevrondown;
  	let t3;
  	let div2_class_value;
  	let current;
  	let mounted;
  	let dispose;
  	let if_block0 = /*selectItems*/ ctx[2].length && create_if_block_1(ctx);

  	closebutton = new CloseButton({
  			props: {
  				color: "none",
  				class: "p-0 focus:ring-gray-400"
  			},
  			$$inline: true
  		});

  	closebutton.$on("click", /*clearAll*/ ctx[8]);

  	chevrondown = new ChevronDown({
  			props: {
  				class: "h-4 w-4 mb-1 mr-1 cursor-pointer"
  			},
  			$$inline: true
  		});

  	let if_block1 = /*show*/ ctx[3] && create_if_block(ctx);

  	const block = {
  		c: function create() {
  			div2 = element("div");
  			span = element("span");
  			if (if_block0) if_block0.c();
  			t0 = space();
  			div1 = element("div");
  			create_component(closebutton.$$.fragment);
  			t1 = space();
  			div0 = element("div");
  			t2 = space();
  			button = element("button");
  			create_component(chevrondown.$$.fragment);
  			t3 = space();
  			if (if_block1) if_block1.c();
  			attr_dev(span, "class", "flex gap-2 flex-wrap");
  			add_location(span, file$1, 72, 2, 2488);
  			attr_dev(div0, "class", "w-[1px] bg-gray-300 dark:bg-gray-600");
  			add_location(div0, file$1, 90, 4, 3067);
  			attr_dev(button, "tabindex", "-1");
  			add_location(button, file$1, 91, 4, 3124);
  			attr_dev(div1, "class", "flex ml-auto gap-2");
  			add_location(div1, file$1, 88, 2, 2945);
  			attr_dev(div2, "tabindex", "-1");
  			attr_dev(div2, "role", "listbox");
  			attr_dev(div2, "class", div2_class_value = twJoin(/*multiSelectClass*/ ctx[6], /*sizes*/ ctx[5][/*size*/ ctx[1]], /*$$props*/ ctx[10].class));
  			add_location(div2, file$1, 66, 0, 2313);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, div2, anchor);
  			append_dev(div2, span);
  			if (if_block0) if_block0.m(span, null);
  			append_dev(div2, t0);
  			append_dev(div2, div1);
  			mount_component(closebutton, div1, null);
  			append_dev(div1, t1);
  			append_dev(div1, div0);
  			append_dev(div1, t2);
  			append_dev(div1, button);
  			mount_component(chevrondown, button, null);
  			append_dev(div2, t3);
  			if (if_block1) if_block1.m(div2, null);
  			current = true;

  			if (!mounted) {
  				dispose = [
  					listen_dev(div2, "click", /*click_handler_1*/ ctx[17], false, false, false, false),
  					listen_dev(div2, "focusout", /*focusout_handler*/ ctx[18], false, false, false, false)
  				];

  				mounted = true;
  			}
  		},
  		p: function update(ctx, [dirty]) {
  			if (/*selectItems*/ ctx[2].length) {
  				if (if_block0) {
  					if_block0.p(ctx, dirty);

  					if (dirty & /*selectItems*/ 4) {
  						transition_in(if_block0, 1);
  					}
  				} else {
  					if_block0 = create_if_block_1(ctx);
  					if_block0.c();
  					transition_in(if_block0, 1);
  					if_block0.m(span, null);
  				}
  			} else if (if_block0) {
  				group_outros();

  				transition_out(if_block0, 1, 1, () => {
  					if_block0 = null;
  				});

  				check_outros();
  			}

  			if (/*show*/ ctx[3]) {
  				if (if_block1) {
  					if_block1.p(ctx, dirty);
  				} else {
  					if_block1 = create_if_block(ctx);
  					if_block1.c();
  					if_block1.m(div2, null);
  				}
  			} else if (if_block1) {
  				if_block1.d(1);
  				if_block1 = null;
  			}

  			if (!current || dirty & /*size, $$props*/ 1026 && div2_class_value !== (div2_class_value = twJoin(/*multiSelectClass*/ ctx[6], /*sizes*/ ctx[5][/*size*/ ctx[1]], /*$$props*/ ctx[10].class))) {
  				attr_dev(div2, "class", div2_class_value);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(if_block0);
  			transition_in(closebutton.$$.fragment, local);
  			transition_in(chevrondown.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(if_block0);
  			transition_out(closebutton.$$.fragment, local);
  			transition_out(chevrondown.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(div2);
  			if (if_block0) if_block0.d();
  			destroy_component(closebutton);
  			destroy_component(chevrondown);
  			if (if_block1) if_block1.d();
  			mounted = false;
  			run_all(dispose);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$1.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const itemsClass = 'py-2 px-3 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600';

  // Selected items
  const itemsSelectClass = 'bg-gray-100 text-bg-gray-900 dark:text-white dark:bg-gray-600';

  function instance$1($$self, $$props, $$invalidate) {
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('MultiSelect', slots, ['default']);
  	const dispatch = createEventDispatcher();
  	let { items = [] } = $$props;
  	let { value = [] } = $$props;
  	let { size = 'md' } = $$props;
  	let { dropdownClass = '' } = $$props;
  	let selectItems = [];
  	let show = false;

  	const sizes = {
  		sm: 'px-2 py-1',
  		md: 'px-3 py-2',
  		lg: 'px-4 py-3'
  	};

  	// Container
  	const multiSelectClass = `relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 focus-within:ring-1 focus-within:border-primary-500 ring-primary-500 dark:focus-within:border-primary-500 dark:ring-primary-500`;

  	// Dropdown
  	let multiSelectDropdown;

  	onMount(() => {
  		if (value.length) {
  			items.map(item => {
  				if (value.includes(item.value)) {
  					selectItems.push(item);
  				}
  			});
  		}
  	});

  	const selectOption = select => {
  		if (selectItems.includes(select)) {
  			clearThisOption(select);
  		} else {
  			selectItems.push(select);
  			value.push(select.value);
  			$$invalidate(2, selectItems);
  			$$invalidate(11, value);
  			dispatch('selected', selectItems);
  		}
  	};

  	const clearAll = e => {
  		e.stopPropagation();
  		$$invalidate(2, selectItems = []);
  		$$invalidate(11, value = []);
  		dispatch('selected', selectItems);
  	};

  	const clearThisOption = select => {
  		if (selectItems.includes(select)) {
  			$$invalidate(2, selectItems = selectItems.filter(o => o !== select));
  			dispatch('selected', selectItems);
  		}

  		if (value.includes(select.value)) {
  			$$invalidate(11, value = value.filter(o => o !== select.value));
  		}
  	};

  	const func = item => clearThisOption(item);
  	const dismiss_handler = item => clearThisOption(item);
  	const click_handler = (item, e) => selectOption(item);
  	const click_handler_1 = () => $$invalidate(3, show = !show);
  	const focusout_handler = () => $$invalidate(3, show = false);

  	$$self.$$set = $$new_props => {
  		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  		if ('items' in $$new_props) $$invalidate(0, items = $$new_props.items);
  		if ('value' in $$new_props) $$invalidate(11, value = $$new_props.value);
  		if ('size' in $$new_props) $$invalidate(1, size = $$new_props.size);
  		if ('dropdownClass' in $$new_props) $$invalidate(12, dropdownClass = $$new_props.dropdownClass);
  		if ('$$scope' in $$new_props) $$invalidate(19, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		Badge,
  		twJoin,
  		twMerge,
  		ChevronDown,
  		CloseButton,
  		createEventDispatcher,
  		onMount,
  		dispatch,
  		items,
  		value,
  		size,
  		dropdownClass,
  		selectItems,
  		show,
  		sizes,
  		multiSelectClass,
  		multiSelectDropdown,
  		itemsClass,
  		itemsSelectClass,
  		selectOption,
  		clearAll,
  		clearThisOption
  	});

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(10, $$props = assign(assign({}, $$props), $$new_props));
  		if ('items' in $$props) $$invalidate(0, items = $$new_props.items);
  		if ('value' in $$props) $$invalidate(11, value = $$new_props.value);
  		if ('size' in $$props) $$invalidate(1, size = $$new_props.size);
  		if ('dropdownClass' in $$props) $$invalidate(12, dropdownClass = $$new_props.dropdownClass);
  		if ('selectItems' in $$props) $$invalidate(2, selectItems = $$new_props.selectItems);
  		if ('show' in $$props) $$invalidate(3, show = $$new_props.show);
  		if ('multiSelectDropdown' in $$props) $$invalidate(4, multiSelectDropdown = $$new_props.multiSelectDropdown);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty & /*dropdownClass*/ 4096) {
  			$$invalidate(4, multiSelectDropdown = twMerge('absolute p-3 flex flex-col gap-1 max-h-64 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white left-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full', dropdownClass));
  		}
  	};

  	$$props = exclude_internal_props($$props);

  	return [
  		items,
  		size,
  		selectItems,
  		show,
  		multiSelectDropdown,
  		sizes,
  		multiSelectClass,
  		selectOption,
  		clearAll,
  		clearThisOption,
  		$$props,
  		value,
  		dropdownClass,
  		slots,
  		func,
  		dismiss_handler,
  		click_handler,
  		click_handler_1,
  		focusout_handler,
  		$$scope
  	];
  }

  class MultiSelect extends SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
  			items: 0,
  			value: 11,
  			size: 1,
  			dropdownClass: 12
  		});

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "MultiSelect",
  			options,
  			id: create_fragment$1.name
  		});
  	}

  	get items() {
  		throw new Error("<MultiSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set items(value) {
  		throw new Error("<MultiSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get value() {
  		throw new Error("<MultiSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set value(value) {
  		throw new Error("<MultiSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get size() {
  		throw new Error("<MultiSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set size(value) {
  		throw new Error("<MultiSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get dropdownClass() {
  		throw new Error("<MultiSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set dropdownClass(value) {
  		throw new Error("<MultiSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src\App.svelte generated by Svelte v3.59.2 */

  const { Error: Error_1, console: console_1 } = globals;
  const file = "src\\App.svelte";

  function create_fragment(ctx) {
  	let div1;
  	let label;
  	let t1;
  	let div0;
  	let multiselect;
  	let current;

  	multiselect = new MultiSelect({
  			props: {
  				items: /*countries*/ ctx[1],
  				value: /*selected*/ ctx[0]
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			div1 = element("div");
  			label = element("label");
  			label.textContent = "Preferred Countries To Display on Top";
  			t1 = space();
  			div0 = element("div");
  			create_component(multiselect.$$.fragment);
  			attr_dev(label, "class", "mb-2");
  			add_location(label, file, 120, 8, 2371);
  			attr_dev(div0, "class", "Select-dropdown");
  			add_location(div0, file, 122, 8, 2448);
  			attr_dev(div1, "class", "mb-3");
  			add_location(div1, file, 118, 1, 2341);
  		},
  		l: function claim(nodes) {
  			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			insert_dev(target, div1, anchor);
  			append_dev(div1, label);
  			append_dev(div1, t1);
  			append_dev(div1, div0);
  			mount_component(multiselect, div0, null);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const multiselect_changes = {};
  			if (dirty & /*countries*/ 2) multiselect_changes.items = /*countries*/ ctx[1];
  			if (dirty & /*selected*/ 1) multiselect_changes.value = /*selected*/ ctx[0];
  			multiselect.$set(multiselect_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			transition_in(multiselect.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			transition_out(multiselect.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) detach_dev(div1);
  			destroy_component(multiselect);
  		}
  	};

  	dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance($$self, $$props, $$invalidate) {
  	let { $$slots: slots = {}, $$scope } = $$props;
  	validate_slots('App', slots, []);
  	let { preferredCountries = [] } = $$props;
  	let { preferredCountries1 = [] } = $$props;
  	let { selected = ["IN", "AF"] } = $$props;
  	let countries = [];
  	const dispatch = createEventDispatcher();

  	const fetchData = async () => {
  		try {
  			const response = await fetch("https://api.recruitly.io/api/business/profile?apiKey=TEST45684CB2A93F41FC40869DC739BD4D126D77");
  			const data = await response.json();
  			console.log(data, "data");
  			$$invalidate(2, preferredCountries = data.mobilePreferences.preferredCountries);
  			console.log(preferredCountries, "prefered countries..");
  			$$invalidate(3, preferredCountries1 = preferredCountries.toUpperCase());
  			console.log(preferredCountries1, "preferedcountries12");
  		} catch(error) {
  			console.error("Error fetching data:", error);
  		}
  	};

  	// Fetch data on component mount
  	onMount(async () => {
  		fetchData();
  		fetchCountries();
  	});

  	async function fetchCountries() {
  		try {
  			const response = await fetch("https://api.recruitly.io/api/lookup/countries?apiKey=TEST69513C4B379BD5594CD0AAC9ECA436CA2C83");

  			if (!response.ok) {
  				throw new Error("Network response was not ok");
  			}

  			const responseData = await response.json();

  			// Check if the 'data' property exists and is an array
  			if (Array.isArray(responseData.data)) {
  				// Map the 'data' array to the correct format
  				$$invalidate(1, countries = responseData.data.map(country => ({ value: country.code, name: country.name })));

  				console.log("Fetched countries:", countries);
  			} else {
  				console.error("Invalid API response format:", responseData);
  			}
  		} catch(error) {
  			console.error("Error fetching countries:", error);
  		}
  	}

  	const writable_props = ['preferredCountries', 'preferredCountries1', 'selected'];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<App> was created with unknown prop '${key}'`);
  	});

  	$$self.$$set = $$props => {
  		if ('preferredCountries' in $$props) $$invalidate(2, preferredCountries = $$props.preferredCountries);
  		if ('preferredCountries1' in $$props) $$invalidate(3, preferredCountries1 = $$props.preferredCountries1);
  		if ('selected' in $$props) $$invalidate(0, selected = $$props.selected);
  	};

  	$$self.$capture_state = () => ({
  		createEventDispatcher,
  		tick,
  		onMount,
  		MultiSelect,
  		preferredCountries,
  		preferredCountries1,
  		selected,
  		countries,
  		dispatch,
  		fetchData,
  		fetchCountries
  	});

  	$$self.$inject_state = $$props => {
  		if ('preferredCountries' in $$props) $$invalidate(2, preferredCountries = $$props.preferredCountries);
  		if ('preferredCountries1' in $$props) $$invalidate(3, preferredCountries1 = $$props.preferredCountries1);
  		if ('selected' in $$props) $$invalidate(0, selected = $$props.selected);
  		if ('countries' in $$props) $$invalidate(1, countries = $$props.countries);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [selected, countries, preferredCountries, preferredCountries1];
  }

  class App extends SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		init(this, options, instance, create_fragment, safe_not_equal, {
  			preferredCountries: 2,
  			preferredCountries1: 3,
  			selected: 0
  		});

  		dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "App",
  			options,
  			id: create_fragment.name
  		});
  	}

  	get preferredCountries() {
  		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set preferredCountries(value) {
  		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get preferredCountries1() {
  		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set preferredCountries1(value) {
  		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get selected() {
  		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set selected(value) {
  		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  class RecruitlyUserprofile {
    constructor(data) {
      this.app = new App({
        target: document.getElementById(data.renderTo),
        props: {
          appData: data,
        },
      });
    }
  }

  return RecruitlyUserprofile;

})();
//# sourceMappingURL=bundle.js.map
