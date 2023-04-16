import { writable } from 'svelte/store';

export const meme = writable('Default Meme');

export let topics = writable(
  [
    {
      id: Math.random(),
      user: 'Meme',
      createDate: '03/09/2023',
      text: 'Impressive! Though it seems the drag feature could be improved.',
      votes: 0,
      commentReply: '',
      replies: [
        {
          id: Math.random(),
          user: 'Meme 2',
          createDate: '03/09/2023',
          text: 'But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
          votes: 2,
          commentReply: '',
          replies: [],
          isReply: false
        }
      ],
      isReply: false
    },
    {
      id: Math.random(),
      user: 'Meme',
      createDate: '03/09/2023',
      commentReply: '',
      text: 'Impressive! Though it seems the drag feature could be improved.',
      votes: 0,
      replies: [],
      isReply: false
    }
  ]
);