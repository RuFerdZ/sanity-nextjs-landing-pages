export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffbc77293ca4af43e6532b0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-amwpft7g',
                  apiId: '86a02176-c69f-4df1-9842-236ba058f636'
                },
                {
                  buildHookId: '5ffbc772eb91b7164b28de7c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sxdchitd',
                  apiId: 'db95de27-3828-4f6c-824b-da0a3d7c5a53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RuFerdZ/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sxdchitd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
