(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),l=a(6),i=(a(0),a(292)),r={title:"Change Log"},b={unversionedId:"change-log",id:"change-log",isDocsHomePage:!1,title:"Change Log",description:"Versioning",source:"@site/docs/change-log.md",slug:"/change-log",permalink:"/wave/docs/change-log",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/change-log.md",version:"current",sidebar:"someSidebar",next:{title:"Migrating from 0.8",permalink:"/wave/docs/migrating-0-8"}},o=[{value:"Versioning",id:"versioning",children:[]},{value:"Support Policy",id:"support-policy",children:[]},{value:"v0.9.0",id:"v090",children:[]},{value:"v0.8.1",id:"v081",children:[]},{value:"v0.8.0",id:"v080",children:[]},{value:"v0.7.0",id:"v070",children:[]},{value:"v0.6.0",id:"v060",children:[]},{value:"v0.5.0",id:"v050",children:[]},{value:"v0.4.0",id:"v040",children:[]},{value:"v0.3.1",id:"v031",children:[]},{value:"v0.3.0",id:"v030",children:[]},{value:"v0.2.0",id:"v020",children:[]},{value:"v0.1.4",id:"v014",children:[]},{value:"v0.1.3",id:"v013",children:[]},{value:"v0.1.2",id:"v012",children:[]},{value:"v0.1.1",id:"v011",children:[]},{value:"v0.1.0",id:"v010",children:[]},{value:"v0.0.7",id:"v007",children:[]},{value:"v0.0.6",id:"v006",children:[]},{value:"v0.0.5",id:"v005",children:[]},{value:"v0.0.4",id:"v004",children:[]},{value:"v0.0.3",id:"v003",children:[]},{value:"v0.0.2",id:"v002",children:[]}],c={rightToc:o};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"versioning"},"Versioning"),Object(i.b)("p",null,"H2O Wave and its Python driver follow ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"Semantic Versioning"),". Major releases ship every six months (~February and ~August), while minor and patch releases may ship as often as every week. Minor and patch releases should never contain breaking changes."),Object(i.b)("p",null,"When referencing the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/h2o-wave/"}),Object(i.b)("inlineCode",{parentName:"a"},"h2o-wave")," package")," from your ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.txt")," or ",Object(i.b)("inlineCode",{parentName:"p"},"setup.py"),", you should always use a version constraint such as ",Object(i.b)("inlineCode",{parentName:"p"},">=4.2, <5")," (any version 4.2 or greater, but less than 5), since major releases of H2O Wave do include breaking changes."),Object(i.b)("h2",{id:"support-policy"},"Support Policy"),Object(i.b)("p",null,"For LTS releases, bug fixes are provided for 2 years and security fixes are provided for 3 years. These releases provide the longest window of support and maintenance. For general releases, bug fixes are provided for 6 months and security fixes are provided for 1 year."),Object(i.b)("h2",{id:"v090"},"v0.9.0"),Object(i.b)("p",null,"Oct 28, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.9.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ASGI compatibility: Wave apps can now be run using an ASGI server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@app")," decorator to identify primary query handler in an app."),Object(i.b)("li",{parentName:"ul"},"Live-reload for apps."),Object(i.b)("li",{parentName:"ul"},"New ",Object(i.b)("inlineCode",{parentName:"li"},"wave")," CLI and ",Object(i.b)("inlineCode",{parentName:"li"},"wave run")," command."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"q.run()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"q.exec()")," APIs for running background tasks."),Object(i.b)("li",{parentName:"ul"},"Display server version/build at startup."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AsyncSite")," for updating other pages from an app without blocking the main thread."),Object(i.b)("li",{parentName:"ul"},"Drop or clear pages from a site using ",Object(i.b)("inlineCode",{parentName:"li"},"del site[route]"),"."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"All HTTP calls now use non-blocking asyncio using the ",Object(i.b)("inlineCode",{parentName:"li"},"httpx")," library."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"listen()")," is deprecated."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"H2O_WAVE_INTERNAL_ADDRESS")," and ",Object(i.b)("inlineCode",{parentName:"li"},"H2O_WAVE_EXTERNAL_ADDRESS")," are deprecated."),Object(i.b)("li",{parentName:"ul"},"An app's UI is now cleared when an app crashes or is terminated."),Object(i.b)("li",{parentName:"ul"},"All examples migrated to use ",Object(i.b)("inlineCode",{parentName:"li"},"@app")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"listen()"),"."),Object(i.b)("li",{parentName:"ul"},"Server binary renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"waved")," (as in ",Object(i.b)("inlineCode",{parentName:"li"},"wave")," daemon)."),Object(i.b)("li",{parentName:"ul"},"Apps using ",Object(i.b)("inlineCode",{parentName:"li"},"@app")," must be run using ",Object(i.b)("inlineCode",{parentName:"li"},"wave run"),"."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Performance and concurrency improvements across the board."),Object(i.b)("li",{parentName:"ul"},"Stability improvements to the Wave Tour.")))),Object(i.b)("h2",{id:"v081"},"v0.8.1"),Object(i.b)("p",null,"Oct 26, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.8.1"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Enable ",Object(i.b)("inlineCode",{parentName:"li"},"visible")," properly on ",Object(i.b)("inlineCode",{parentName:"li"},"text_*")," components."),Object(i.b)("li",{parentName:"ul"},"Fix checkbox value unchecking."),Object(i.b)("li",{parentName:"ul"},"Improve stepper component layout.")))),Object(i.b)("h2",{id:"v080"},"v0.8.0"),Object(i.b)("p",null,"Oct 20, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.8.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Escape Cypress test functions using leading underscore ",Object(i.b)("inlineCode",{parentName:"li"},"_")," if they overlap with Python reserved keywords."),Object(i.b)("li",{parentName:"ul"},"Add data-test attribute to all form components for browser testing."),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"trigger")," property to the date picker component."),Object(i.b)("li",{parentName:"ul"},"Allow pre-selecting rows in the table component."),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"visible")," property to all components to show/hide them on demand."),Object(i.b)("li",{parentName:"ul"},"Add support for OpenID Connect (OIDC)."),Object(i.b)("li",{parentName:"ul"},"Add documentation on security."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Default HTML page title set to ",Object(i.b)("em",{parentName:"li"},"Wave"),"."),Object(i.b)("li",{parentName:"ul"},"Make % heights work properly for frames inside forms.")))),Object(i.b)("h2",{id:"v070"},"v0.7.0"),Object(i.b)("p",null,"Oct 15, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.7.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hash navigation using context menus."),Object(i.b)("li",{parentName:"ul"},"Allow handling location hash when an open app page is reloaded."),Object(i.b)("li",{parentName:"ul"},"Allow pre-selecting a tab in a tab_card."),Object(i.b)("li",{parentName:"ul"},"Allow setting a height on the file upload component."),Object(i.b)("li",{parentName:"ul"},"Allow justifying buttons left/center/right/spread."),Object(i.b)("li",{parentName:"ul"},"Add data-test attribute to all cards for browser testing."),Object(i.b)("li",{parentName:"ul"},"New documentation website, gallery, guides and tutorials."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Fit table height to content height whenever possible."),Object(i.b)("li",{parentName:"ul"},"Improve spacing between form components."),Object(i.b)("li",{parentName:"ul"},"data-test attribute is set based on the names of cards."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Quote CSV data properly while downloading a table component's data."),Object(i.b)("li",{parentName:"ul"},"Don't auto-hide axis labels in plots when data is missing."),Object(i.b)("li",{parentName:"ul"},"Display labels instead of names when a pickers initial values are set."),Object(i.b)("li",{parentName:"ul"},"Handle numeric column sorting in the table component."),Object(i.b)("li",{parentName:"ul"},"Handle icon column sorting in the table component.")))),Object(i.b)("h2",{id:"v060"},"v0.6.0"),Object(i.b)("p",null,"Sep 23, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.6.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apps when launched now automatically use an available free port instead of ",Object(i.b)("inlineCode",{parentName:"li"},"55556"),"."),Object(i.b)("li",{parentName:"ul"},"Client-side redirects to URLs and hashes using ",Object(i.b)("inlineCode",{parentName:"li"},"meta_card.redirect"),"."),Object(i.b)("li",{parentName:"ul"},"Context menus inside forms: ",Object(i.b)("inlineCode",{parentName:"li"},"ui.text_xl()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ui.text_l()")," now support optional context menus."),Object(i.b)("li",{parentName:"ul"},"Plots now support specifying data values for predictable color encoding and legends."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ui.markup")," component for rendering HTML inline in forms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ui.template")," component for rendering templated HTML inline in forms."),Object(i.b)("li",{parentName:"ul"},"The height of tables can now be controlled using the ",Object(i.b)("inlineCode",{parentName:"li"},"height")," attribute."),Object(i.b)("li",{parentName:"ul"},"Both sorting and group-by now work on the same table column if specified."),Object(i.b)("li",{parentName:"ul"},"Lots of examples on how to use ",Object(i.b)("inlineCode",{parentName:"li"},"ui.table")," sorting, grouping, search, download, etc."),Object(i.b)("li",{parentName:"ul"},"Ability to specify which column in a ",Object(i.b)("inlineCode",{parentName:"li"},"ui.table")," is the primary column, or disable altogether."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ui.text()")," now unconditionally allows embedded HTML tags."),Object(i.b)("li",{parentName:"ul"},"App host now defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"127.0.0.1")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"localhost"),"."),Object(i.b)("li",{parentName:"ul"},"Footer display in ",Object(i.b)("inlineCode",{parentName:"li"},"ui.table")," is now inferred from usage and displayed automatically."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"min_width")," and ",Object(i.b)("inlineCode",{parentName:"li"},"max_width")," attributes for table columns are now strings (consistency)."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Background color rendering bug when page overflows after loading."),Object(i.b)("li",{parentName:"ul"},"Render tooltip properly on toolbar command buttons."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ui.table()")," rendering bug: remove stray ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},"Python error stack trace, if any, is displayed on top of all other cards on page.")))),Object(i.b)("h2",{id:"v050"},"v0.5.0"),Object(i.b)("p",null,"Sep 18, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.5.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Example for controlling cards with tabs."),Object(i.b)("li",{parentName:"ul"},"Cypress test runner for CI."),Object(i.b)("li",{parentName:"ul"},"Search, sort, filter, group-by, export and custom cell types for table component."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Remove semantic validation for stepper component."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Value synchronization bug in textbox component.")))),Object(i.b)("h2",{id:"v040"},"v0.4.0"),Object(i.b)("p",null,"Sep 16, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.4.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Trigger attribute to checklist component."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Allow same min and max values for the range slider component."),Object(i.b)("li",{parentName:"ul"},"App tests are now automatically and directly translated to Cypress tests when loaded."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Allow removing selected options from the picker component."),Object(i.b)("li",{parentName:"ul"},"Render axis title properly when specified."),Object(i.b)("li",{parentName:"ul"},"Raise informative error message if attempting to use Numpy objects in components."))),Object(i.b)("li",{parentName:"ul"},"Removed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Cypress test bridge removed from server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"run_tests")," API.")))),Object(i.b)("h2",{id:"v031"},"v0.3.1"),Object(i.b)("p",null,"Sep 8, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.3.1"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Multiselect dropdown checkboxes do not respond when clicked.")))),Object(i.b)("h2",{id:"v030"},"v0.3.0"),Object(i.b)("p",null,"Sep 8, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.3.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Native plots inside form cards - ",Object(i.b)("inlineCode",{parentName:"li"},"ui.visualization()"),"."),Object(i.b)("li",{parentName:"ul"},"Vega plots inside form cards - ",Object(i.b)("inlineCode",{parentName:"li"},"ui.vega_visualization()"),".")))),Object(i.b)("h2",{id:"v020"},"v0.2.0"),Object(i.b)("p",null,"Sep 4, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.2.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Picker component."),Object(i.b)("li",{parentName:"ul"},"Breadcrumbs component."),Object(i.b)("li",{parentName:"ul"},"Range slider component."),Object(i.b)("li",{parentName:"ul"},"Stepper component."),Object(i.b)("li",{parentName:"ul"},"Allow backend to handle changes to textboxes as you type."),Object(i.b)("li",{parentName:"ul"},"Select / deselect all controls for multivalued dropdown component."),Object(i.b)("li",{parentName:"ul"},"Examples for using plotly plots."),Object(i.b)("li",{parentName:"ul"},"Example for updating vega plots."),Object(i.b)("li",{parentName:"ul"},"OS-specific installations instructions."),Object(i.b)("li",{parentName:"ul"},"Cypress test framework support."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add .exe extension o Windows executable."),Object(i.b)("li",{parentName:"ul"},"Percentage formatting in Safari.")))),Object(i.b)("h2",{id:"v014"},"v0.1.4"),Object(i.b)("p",null,"Aug 10, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.1.4"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Frame heights are not respected with total height of frames exceeds containing card size")))),Object(i.b)("h2",{id:"v013"},"v0.1.3"),Object(i.b)("p",null,"Aug 10, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.1.3"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"h2o_wave.ui.link()")," now has a ",Object(i.b)("inlineCode",{parentName:"li"},"download")," attribute to work around a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=858538"}),"Firefox bug"),"."),Object(i.b)("li",{parentName:"ul"},"Race condition in the interactive tour that caused some examples to not preview properly.")))),Object(i.b)("h2",{id:"v012"},"v0.1.2"),Object(i.b)("p",null,"Aug 7, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.1.2"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"API for ",Object(i.b)("inlineCode",{parentName:"li"},"h2o_wave.core.Expando")," copy, clone and item/attribute deletion."),Object(i.b)("li",{parentName:"ul"},"Migration guide."),Object(i.b)("li",{parentName:"ul"},"Example for setting browser window title."),Object(i.b)("li",{parentName:"ul"},"API and example for Header card: ",Object(i.b)("inlineCode",{parentName:"li"},"h2o_wave.ui.header_card()"),"."),Object(i.b)("li",{parentName:"ul"},"Export ",Object(i.b)("inlineCode",{parentName:"li"},"h2o_wave.core.Ref")," from ",Object(i.b)("inlineCode",{parentName:"li"},"h2o_wave"),"."),Object(i.b)("li",{parentName:"ul"},"API and examples for inline frames inside form cards: ",Object(i.b)("inlineCode",{parentName:"li"},"h2o_wave.ui.frame()"),"."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Renamed env var prefix for settings to ",Object(i.b)("inlineCode",{parentName:"li"},"H2O_Q_"),"."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Plot X/Y axis transpose bug.")))),Object(i.b)("h2",{id:"v011"},"v0.1.1"),Object(i.b)("p",null,"Jul 27, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.1.1"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Options for file type and size to file upload component."),Object(i.b)("li",{parentName:"ul"},"API for displaying desktop notifications."),Object(i.b)("li",{parentName:"ul"},"Buttons can now submit specific values instead of only True/False."),Object(i.b)("li",{parentName:"ul"},"Examples for layout and card sizing."),Object(i.b)("li",{parentName:"ul"},"Image card for displaying base64-encoded images."),Object(i.b)("li",{parentName:"ul"},"Example for image card."),Object(i.b)("li",{parentName:"ul"},"Vector graphics API."),Object(i.b)("li",{parentName:"ul"},"Turtle graphics based path generator."),Object(i.b)("li",{parentName:"ul"},"Examples for graphics card."))),Object(i.b)("li",{parentName:"ul"},"Fixed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Re-rendering performance improvements.")))),Object(i.b)("h2",{id:"v010"},"v0.1.0"),Object(i.b)("p",null,"Jul 13, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.1.0"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Example for displaying iframe content > 2MB."),Object(i.b)("li",{parentName:"ul"},"Example for plotting using matplotlib."),Object(i.b)("li",{parentName:"ul"},"Example for plotting using Altair."),Object(i.b)("li",{parentName:"ul"},"Example for plotting using Vega."),Object(i.b)("li",{parentName:"ul"},"Example for plotting using Bokeh."),Object(i.b)("li",{parentName:"ul"},"Example for plotting using custom D3.js Javascript."),Object(i.b)("li",{parentName:"ul"},"Example for live dashboard with stats cards."),Object(i.b)("li",{parentName:"ul"},"Example for master-detail user interfaces using ",Object(i.b)("inlineCode",{parentName:"li"},"ui.table()"),"."),Object(i.b)("li",{parentName:"ul"},"Example for authoring multi-step wizard user interfaces."),Object(i.b)("li",{parentName:"ul"},"Unload API: ",Object(i.b)("inlineCode",{parentName:"li"},"q.unload()")," to delete uploaded files.")))),Object(i.b)("h2",{id:"v007"},"v0.0.7"),Object(i.b)("p",null,"Jul 12, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.0.7"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Download API: ",Object(i.b)("inlineCode",{parentName:"li"},"q.download()"),"."),Object(i.b)("li",{parentName:"ul"},"Vega-lite support: ",Object(i.b)("inlineCode",{parentName:"li"},"ui.vega_card()"),"."),Object(i.b)("li",{parentName:"ul"},"Context menu support to all cards."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refresh")," attribute on ",Object(i.b)("inlineCode",{parentName:"li"},"meta_card")," allows static pages to stop receiving live updates."),Object(i.b)("li",{parentName:"ul"},"Passing ",Object(i.b)("inlineCode",{parentName:"li"},"-debug")," when starting server displays site stats at ",Object(i.b)("inlineCode",{parentName:"li"},"/_d/site"),"."),Object(i.b)("li",{parentName:"ul"},"Drag and drop support for file upload component."),Object(i.b)("li",{parentName:"ul"},"Template expression support for markdown cards."),Object(i.b)("li",{parentName:"ul"},"All APIs and examples documented."),Object(i.b)("li",{parentName:"ul"},"All 110 examples now ship with the Sphinx documentation."),Object(i.b)("li",{parentName:"ul"},"Documentation now ships with release download."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"API consistency: ",Object(i.b)("inlineCode",{parentName:"li"},"ui.vis()")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"ui.plot()"),"."),Object(i.b)("li",{parentName:"ul"},"All stats cards now have descriptive names."),Object(i.b)("li",{parentName:"ul"},"API consistency: ",Object(i.b)("inlineCode",{parentName:"li"},"ui.mark.mark")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"ui.mark.type"),"."),Object(i.b)("li",{parentName:"ul"},"API consistency: ",Object(i.b)("inlineCode",{parentName:"li"},"page.sync()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"page.push()")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"page.save()"),"."))),Object(i.b)("li",{parentName:"ul"},"Removed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ui.dashboard_card()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ui.notebook_card()"),".")))),Object(i.b)("h2",{id:"v006"},"v0.0.6"),Object(i.b)("p",null,"Jul 6, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.0.6"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Log network traffic when logging is set to debug mode."),Object(i.b)("li",{parentName:"ul"},"Capture and display unhandled exceptions on the UI."),Object(i.b)("li",{parentName:"ul"},"Routing using location hash."),Object(i.b)("li",{parentName:"ul"},"Toolbar component."),Object(i.b)("li",{parentName:"ul"},"Tabs component."),Object(i.b)("li",{parentName:"ul"},"Nav component."),Object(i.b)("li",{parentName:"ul"},"Upload API: ",Object(i.b)("inlineCode",{parentName:"li"},"q.upload()"),"."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"q.session")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"q.user"))))),Object(i.b)("h2",{id:"v005"},"v0.0.5"),Object(i.b)("p",null,"Jun 29, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.0.5"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add configure() API to configure environment before launching.")))),Object(i.b)("h2",{id:"v004"},"v0.0.4"),Object(i.b)("p",null,"Jun 26, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.0.4"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Multi-user and multi-client support: launch apps in ",Object(i.b)("inlineCode",{parentName:"li"},"multicast")," or ",Object(i.b)("inlineCode",{parentName:"li"},"unicast")," modes in addition to ",Object(i.b)("inlineCode",{parentName:"li"},"broadcast")," mode."),Object(i.b)("li",{parentName:"ul"},"Client-specific data can now be stored and accessed via ",Object(i.b)("inlineCode",{parentName:"li"},"q.client"),", similar to ",Object(i.b)("inlineCode",{parentName:"li"},"q.session")," and ",Object(i.b)("inlineCode",{parentName:"li"},"q.app"),"."),Object(i.b)("li",{parentName:"ul"},"Simpler page referencing: ",Object(i.b)("inlineCode",{parentName:"li"},"import site")," can be used instead of ",Object(i.b)("inlineCode",{parentName:"li"},"site = Site()"),"."))),Object(i.b)("li",{parentName:"ul"},"Changed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apps now lauch in ",Object(i.b)("inlineCode",{parentName:"li"},"unicast")," mode by default instead of ",Object(i.b)("inlineCode",{parentName:"li"},"broadcast")," mode.")))),Object(i.b)("h2",{id:"v003"},"v0.0.3"),Object(i.b)("p",null,"Jun 19, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.0.3"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Make ",Object(i.b)("inlineCode",{parentName:"li"},"Expando")," data structure available for apps.")))),Object(i.b)("h2",{id:"v002"},"v0.0.2"),Object(i.b)("p",null,"Jun 17, 2020 - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/tag/v0.0.2"}),"Download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Initial version"),Object(i.b)("li",{parentName:"ul"},"v0.0.1"),Object(i.b)("li",{parentName:"ul"},"Package stub")))}p.isMDXComponent=!0},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,s=u["".concat(r,".").concat(d)]||u[d]||m[d]||i;return a?l.a.createElement(s,b(b({ref:t},c),{},{components:a})):l.a.createElement(s,b({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var c=2;c<i;c++)r[c]=a[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);