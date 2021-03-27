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
                  buildHookId: '605e8e99f6618e71aded15c5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ymsgvsih',
                  apiId: 'd9f1704c-94fa-4cfd-ae98-826c71957697'
                },
                {
                  buildHookId: '605e8e99b6b86a7be0d79903',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vnqo65fo',
                  apiId: '46956e5c-6b3b-4a7d-b509-3675a7f29832'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eriverec/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vnqo65fo.netlify.app', category: 'apps'}
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
