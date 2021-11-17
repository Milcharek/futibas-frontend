import React from "react";
import { useTransition } from 'react-spring';

import Toast from "./Toast";

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    // const messageWithTransitions = useTransition(
    //     messages, 
    //     {
    //         from: { right: '-120%'},
    //         enter: { right: '0%' },
    //         leave: { right: '-120%' },
    //     }
    // );

    const messagesWithTransitions = useTransition<ToastMessage, { right: string; opacity: number }>(
        messages, {
        from: { right: '-110%', opacity: 0 },
        enter: { right: '0%', opacity: 1 },
        leave: { right: '-110%', opacity: 0 },
    });

    return (
        <Container>
            {messagesWithTransitions((props, item) => (
                <Toast key={item.id} style={props} message={item} />
            ))}
        </Container>
    );
};

// return (
//     <Container>
//         { messagesWithTransitions.map(({ item, key, prop }) => (
//             <Toast 
//                 key={ message.id }
//                 message={ message }
//             />
//         ))}
//     </Container>
// ) 
// }

export default ToastContainer;