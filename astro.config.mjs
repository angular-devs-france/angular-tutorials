import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorials.angulardevs.fr",
  integrations: [
    starlight({
      title: "Angular Tutorials",
      logo: {
        src: "./src/assets/logo.webp",
      },
      components: {
        Head: "./src/components/Head.astro",
      },
      favicon: "/favicon.ico",
      social: {
        linkedin: "https://www.linkedin.com/company/98390019",
        twitter: "https://x.com/AngularDevsFr",
      },
      sidebar: [
        {
          label: "Introduction Course",
          translations: { fr: "Apprendre les bases d'Angular" },
          items: [
            {
              label: "Introduction",
              link: "/legacy-course/introduction",
            },
            {
              label: "Learning process",
              link: "/legacy-course/learning-process",
              translations: { fr: "Processus d'apprentissage" },
            },
            {
              label: "Prerequisites",
              link: "/legacy-course/prerequisites",
              translations: { fr: "Pré-requis" },
            },
            {
              label: "TypeScript introduction",
              link: "/legacy-course/typescript-introduction",
              translations: { fr: "Introduction à TypeScript" },
            },
            {
              label: "Getting started",
              link: "/legacy-course/getting-started",
              translations: { fr: "C'est parti !" },
            },
            {
              label: "Task listing",
              collapsed: true,
              translations: {
                fr: "Liste des tâches",
              },
              items: [
                {
                  label: "Add an UI Library",
                  link: "/legacy-course/task-listing/add-ui-library",
                  translations: {
                    fr: "Ajout d'une librairie UI",
                  },
                },
                {
                  label: "Components introduction",
                  link: "/legacy-course/task-listing/components-introduction",
                  translations: {
                    fr: "Introduction sur les composants",
                  },
                },
                {
                  label: "Create your first component",
                  link: "/legacy-course/task-listing/create-first-component",
                  translations: {
                    fr: "Créez votre premier composant",
                  },
                },
                {
                  label: "Create the task interface",
                  link: "/legacy-course/task-listing/task-interface",
                  translations: {
                    fr: "Créez l'interface des tâches",
                  },
                },
                {
                  label: "Display the list",
                  link: "/legacy-course/task-listing/display-list",
                  translations: {
                    fr: "Afficher la liste",
                  },
                },
                {
                  label: "Interpolation",
                  link: "/legacy-course/task-listing/interpolation",
                },
                {
                  label: "Pipes",
                  link: "/legacy-course/task-listing/pipes",
                },
              ],
            },
            {
              label: "Create task",
              collapsed: true,
              translations: {
                fr: "Créer une tâche",
              },
              items: [
                {
                  label: "Create form component",
                  link: "/legacy-course/create-task/create-form-component",
                  translations: {
                    fr: "Créez un composant dédié",
                  },
                },
                {
                  label: "Routing introduction",
                  link: "/legacy-course/create-task/routing-introduction",
                  translations: {
                    fr: "Introduction au routage",
                  },
                },
                {
                  label: "HTML form",
                  link: "/legacy-course/create-task/html-form",
                  translations: {
                    fr: "Formulaire HTML",
                  },
                },
                {
                  label: "Form binding",
                  link: "/legacy-course/create-task/form-binding",
                  translations: {
                    fr: "Liaison du formulaire",
                  },
                },
                {
                  label: "Event binding",
                  link: "/legacy-course/create-task/event-binding",
                  translations: {
                    fr: "Liaison d'évènements",
                  },
                },
                {
                  label: "Angular service",
                  link: "/legacy-course/create-task/angular-service",
                  translations: {
                    fr: "Service Angular",
                  },
                },
                {
                  label: "Dependency injection",
                  link: "/legacy-course/create-task/dependency-injection",
                  translations: {
                    fr: "Injection de dépendances",
                  },
                },
                {
                  label: "Add task in service",
                  link: "/legacy-course/create-task/add-task-service",
                  translations: {
                    fr: "Ajoutez une tâche via le service",
                  },
                },
                {
                  label: "Inject service in form",
                  link: "/legacy-course/create-task/inject-service-form",
                  translations: {
                    fr: "Injectez le service",
                  },
                },
                {
                  label: "Programmatical routing",
                  link: "/legacy-course/create-task/programmatical-routing",
                  translations: {
                    fr: "Routage avancé",
                  },
                },
                {
                  label: "Component destruction",
                  link: "/legacy-course/create-task/component-destruction",
                  translations: {
                    fr: "Destruction du composant",
                  },
                },
              ],
            },
            {
              label: "Update task",
              collapsed: true,
              translations: { fr: "Mettre à jour une tâche" },
              items: [
                {
                  label: "Update task route",
                  link: "/legacy-course/update-task/update-task-route",
                  translations: { fr: "Naviguez avec panache !" },
                },
                {
                  label: "Update form",
                  link: "/legacy-course/update-task/update-task-form",
                  translations: { fr: "Formulaire de mise à jour" },
                },
                {
                  label: "Submit update form",
                  link: "/legacy-course/update-task/submit-update-form",
                  translations: {
                    fr: "Soumettez le formulaire de mise à jour",
                  },
                },
              ],
            },
            {
              label: "Delete task",
              collapsed: true,
              translations: {
                fr: "Supprimer une tâche",
              },
              items: [
                {
                  label: "Add delete function",
                  link: "/legacy-course/delete-task/add-delete-function",
                  translations: {
                    fr: "Ajouter la fonction supprimer",
                  },
                },
                {
                  label: "Add delete button",
                  link: "/legacy-course/delete-task/add-delete-button",
                  translations: {
                    fr: "Ajouter le bouton supprimer",
                  },
                },
                {
                  label: "Add empty list",
                  link: "/legacy-course/delete-task/add-empty-list",
                  translations: {
                    fr: "Si liste vide",
                  },
                },
              ],
            },
            {
              label: "API Server",
              collapsed: true,
              translations: { fr: "Utilisez les APIs" },
              items: [
                {
                  label: "JSON server installation",
                  link: "/legacy-course/api-server/json-server-installation",
                  translations: { fr: "Installation de JSON server" },
                },
                {
                  label: "Add HTTP client",
                  link: "/legacy-course/api-server/add-http-client",
                  translations: { fr: "Ajoutez HTTP Client" },
                },
                {
                  label: "Retrieve tasks",
                  link: "/legacy-course/api-server/retrieve-tasks",
                  translations: { fr: "Récupérez la liste des tâches" },
                },
                {
                  label: "Create task",
                  link: "/legacy-course/api-server/create-task",
                  translations: { fr: "Modifiez la création" },
                },
                {
                  label: "Update task",
                  link: "/legacy-course/api-server/update-task",
                  translations: { fr: "Modifiez la mise à jour" },
                },
                {
                  label: "Delete task",
                  link: "/legacy-course/api-server/delete-task",
                  translations: { fr: "Modifiez la suppression" },
                },
              ],
            },
            // {
            //   label: '🏁 Final review',
            //   link: '/practical-course/final-review',
            //   attrs: {
            //     style: 'font-weight: bold'
            //   }
            // },
            // {
            //   label: '🎉 Congratulations',
            //   link: '/practical-course/congratulations'
            // }
            // , {
            //   label: '📚 Resources',
            //   link: '/practical-course/resources'
            // }, {
            //   label: 'Glossary',
            //   link: '/practical-course/glossary'
            // }
          ],
        },
      ],
      // Set English as the default language for this site.
      defaultLocale: "root",
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "French",
          lang: "fr",
        },
      },
      customCss: ["./src/tailwind.css"],
      plugins: [starlightImageZoom()],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
