import {
  it,
  expect,
} from 'vitest';
import {
  mount,
} from '@vue/test-utils';
import TestComponent from './WrapperComponent.vue'

it('works', async() => {
  const wrapper = mount(TestComponent, {
    global: {
      stubs: {
        teleport: false,
      }
    }
  })
  await wrapper.find('[data-test="trigger"]').trigger('click')

  expect(wrapper.vm.state.foo).toBe(false)

  await wrapper.find('[data-test="checkbox"]').setValue()

  expect(wrapper.vm.state.foo).toBe(true)
})
