import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LoaderComponent } from './loader.component';
import { LoaderModule } from './loader.module';

export default {
    title: 'shared/loader',
    component: LoaderComponent,
    decorators: [moduleMetadata({ imports: [LoaderModule] })],
} as Meta;

const Template: Story<LoaderComponent> = (props: LoaderComponent) => ({ props });

export const Default = Template.bind({});
Default.args = { visible: true };
