export default function () {
  return {
    sprints: [
      {
        id: 12,
        last: true,
        current: false,
        next: false
      },
      {
        id: 13,
        last: false,
        current: true,
        next: false
      },
      {
        id: 14,
        last: false,
        current: false,
        next: true
      }
    ],
    tasks: [
      {
        id: 99,
        project: 'Ubicanica',
        title: 'Smash that shit',
        sprint_id: 11,
        done: false
      },
      {
        id: 98,
        project: 'Flyinginstructor',
        title: 'Redirects and such',
        sprint_id: 12,
        done: false
      },
      {
        id: 1,
        project: 'Fuerenand',
        title: 'Do something awesome',
        sprint_id: 13,
        done: false
      },
      {
        id: 2,
        project: 'Fuerenand',
        title: 'Well, do even more awesome stuff',
        sprint_id: 13,
        done: false
      },
      {
        id: 3,
        project: 'FlyingInstructor',
        title: 'Do something nice here, too',
        sprint_id: 13,
        done: false
      },
      {
        id: 4,
        project: 'privat',
        title: 'Laravel Endpoints integrieren',
        sprint_id: 14,
        done: false
      },
      {
        id: 5,
        project: 'privat',
        title: 'Challenges integrieren',
        sprint_id: 14,
        done: false
      },
      {
        id: 0,
        project: 'privat',
        title: 'Auth integration',
        sprint_id: 0,
        done: false
      }
    ]
  }
}
