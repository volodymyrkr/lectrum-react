import io from 'socket.io-client';

import {ROOT_URL} from '../REST/config';

export const socket = io(ROOT_URL, {
    path: '/react/ws'
})
