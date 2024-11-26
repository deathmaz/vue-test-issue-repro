import {
  it,
} from 'vitest';
import {
  mount,
} from '@vue/test-utils';
import TestComponent from './WrapperComponent.vue'

it('works', async() => {
  const wrapper = mount(TestComponent, {
    global: {
      stubs: {
        teleport: true,
      }
    }
  })
  await wrapper.find('[data-test="trigger"]').trigger('click')
  await wrapper.find('[data-test="checkbox"]').setValue()
})
