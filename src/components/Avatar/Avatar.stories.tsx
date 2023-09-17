import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default { 
    name: 'Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => <Avatar {...args} />

export const Test = Template.bind({});
Test.args = {
    name: "Test"
}

export const HelloWorld = Template.bind({})
HelloWorld.args = {
    name: "Hello World"
}

export const ReactAvatarInitials = Template.bind({})
ReactAvatarInitials.args = {
    name: "React Avatar Initials"
}