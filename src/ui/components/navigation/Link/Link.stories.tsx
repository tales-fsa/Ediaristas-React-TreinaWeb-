import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './Link';
import { types } from '@storybook/addons';

export default {
    title: 'navigation/Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Clique Aqui',
    href: '/#'
};