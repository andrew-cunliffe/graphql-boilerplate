import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
    title: 'shared/button',
    component: ButtonComponent,
    decorators: [moduleMetadata({ imports: [ButtonModule] })],
} as Meta;

const Template: Story<ButtonComponent> = (props: ButtonComponent) => {
    return { props, template: `<app-button>Test</app-button>` };
};

export const Default = Template.bind({});
Default.args = { visible: true };
