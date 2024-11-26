import {
  it,
  expect,
} from 'vitest';
import {
  mount,
} from '@vue/test-utils';
import TestComponent from './WrapperComponent.vue'
import CheckboxWrapper from './CheckboxWrapper.vue';

it('works', async() => {
  const wrapper = mount(TestComponent, {
    global: {
      stubs: {
        teleport: false,
      }
    }
  })
  await wrapper.find('[data-test="trigger"]').trigger('click')
  const checkbox = wrapper.findComponent(CheckboxWrapper)

  expect(wrapper.vm.state.foo).toBe(false)

  await checkbox.find('[data-test="checkbox"]').setValue()

  expect(wrapper.vm.state.foo).toBe(true)
})
