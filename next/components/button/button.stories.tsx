import { Meta, Story } from '@storybook/react';

import { Button } from '.';

export default {
    component: Button,
    title: 'Form/Button',
} as Meta;

const Template: Story = () => {
    return <Button type="button">Button text</Button>;
};

export const Default = Template.bind({});
