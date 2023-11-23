import { Text } from '@mantine/core';

import { Badge } from './styles';
import { ReactNode } from 'react';

interface BadgeTitleProps {
    title: String,
    icon: ReactNode
}

const BadgeTitle = ({ title, icon }: BadgeTitleProps) => {
    return ( 
        <Badge variant="deafult" leftSection={icon}>
            <Text size="sm" fw={700} tt="uppercase" c="#FFF">{title}</Text>
        </Badge>
     );
}
 
export default BadgeTitle;