import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@seju-ui/react'
import React from 'react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>Testando o elemento Box</Text>
            </>
        ),
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
