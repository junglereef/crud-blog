const post = {
  id: 20,
  user_id: 1,
  title: "lorem ipsum imet dolum",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus neque odio, quis hendrerit est luctus ac. Suspendisse pharetra et lorem eu ullamcorper. Donec eu ipsum orci. Praesent malesuada elit purus, sed cursus turpis pretium ac. Aliquam semper nulla purus, ac ornare dolor finibus nec. Praesent pretium risus vitae felis aliquet dignissim. Cras sed enim metus. Etiam nec ipsum malesuada, mattis risus in, fermentum enim. Maecenas viverra urna eu libero faucibus tristique. Quisque faucibus justo neque, quis ullamcorper lorem auctor nec. Vestibulum ullamcorper, justo sed luctus ullamcorper, ipsum ligula tristique erat, ut scelerisque nulla erat id ligula. Praesent diam turpis, imperdiet at venenatis eget, egestas in eros. Praesent sed justo mattis, venenatis sapien non, cursus quam. Morbi porta libero dolor, vitae sagittis eros elementum quis. Suspendisse sagittis vel turpis id malesuada. Nullam non fringilla eros. Aenean vitae nisl turpis. Ut et augue eget leo pellentesque aliquet. Donec ante magna, fermentum in urna vel, viverra lobortis diam. Donec viverra arcu vitae quam efficitur ultrices.",
  category_id: 1,
  enable: true,
  createdAt: "2021-10-21T09:14:12.000Z",
  updatedAt: "2021-10-21T09:14:12.000Z",
  user: {
    id: 1,
    fullname: "John Doe",
    username: "Jhon1",
    password: "$2a$10$Z9w0c./0L.srw1n3J/NhouEGEgK95cAgkr1yeX5TAqgdmIma0SV4a",
    github: null,
    linkedin: null,
    bio: "Aliquam pulvinar euismod orci ut suscipit. Vivamus sodales mauris eget consequat volutpat. Cras sodales mi felis. Cras ullamcorper odio dolor. Quisque risus ligula, interdum posuere diam in, tempor fringilla ex. Donec imperdiet purus vel turpis dictum, eget gravida arcu rhoncus. Suspendisse mollis pellentesque leo, sed efficitur sapien sagittis ac. Curabitur condimentum mattis odio vel placerat. Sed interdum massa sed urna porta, vel lobortis lacus facilisis. Etiam nec ante sit amet nibh mollis commodo. Vivamus viverra laoreet blandit. Sed ipsum urna, cursus vitae sagittis auctor, elementum at ex. Vivamus leo odio, pulvinar eleifend tempor eu, elementum ornare mauris. Curabitur viverra turpis turpis, eu pulvinar dolor tincidunt sed.",
    enable: true,
    createdAt: "2021-10-21T09:00:25.000Z",
    updatedAt: "2021-10-21T09:00:25.000Z",
  },
  category: {
    id: 1,
    name: "Categoria 1",
    enable: true,
    createdAt: "2021-10-21T09:11:46.000Z",
    updatedAt: "2021-10-21T09:11:46.000Z",
  },
  comments: [
    {
      id: 23,
      user_id: 5,
      post_id: 20,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus neque odio, quis hendrerit est luctus ac. Suspendisse pharetra et lorem eu ullamcorper. Donec eu ipsum orci. Praesent malesuada elit purus, sed cursus turpis pretium ac. Aliquam semper nulla purus, ac ornare dolor finibus nec. Praesent pretium risus vitae felis aliquet dignissim. Cras sed enim metus. Etiam nec",
      enable: true,
      createdAt: "2021-10-21T09:27:55.000Z",
      updatedAt: "2021-10-21T09:27:55.000Z",
      user: {
        id: 5,
        fullname: "John Doe",
        username: "Jhon5",
        password:
          "$2a$10$TWCJABvHDUTfVWVbHSsjcuV97ARVRBtuyShqbCMIujqmR5d6Kjf.2",
        github: null,
        linkedin: null,
        bio: "Aliquam pulvinar euismod orci ut suscipit. Vivamus sodales mauris eget consequat volutpat. Cras sodales mi felis. Cras ullamcorper odio dolor. Quisque risus ligula, interdum posuere diam in, tempor fringilla ex. Donec imperdiet purus vel turpis dictum, eget gravida arcu rhoncus. Suspendisse mollis pellentesque leo, sed efficitur sapien sagittis ac. Curabitur condimentum mattis odio vel placerat. Sed interdum massa sed urna porta, vel lobortis lacus facilisis. Etiam nec ante sit amet nibh mollis commodo. Vivamus viverra laoreet blandit. Sed ipsum urna, cursus vitae sagittis auctor, elementum at ex. Vivamus leo odio, pulvinar eleifend tempor eu, elementum ornare mauris. Curabitur viverra turpis turpis, eu pulvinar dolor tincidunt sed.",
        enable: true,
        createdAt: "2021-10-21T09:00:50.000Z",
        updatedAt: "2021-10-21T09:00:50.000Z",
      },
    },
  ],
};
