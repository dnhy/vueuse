import type { ComponentPublicInstance, MaybeRef, MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'

export type VueInstance = ComponentPublicInstance
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null

export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T | undefined

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export function unrefElement<T extends MaybeElement>(elRef: MaybeComputedElementRef<T>): UnRefElementReturn<T> {
  const plain = toValue(elRef)
  return (plain as VueInstance)?.$el ?? plain
}
interface b {
  age: number
}
interface c {
  x: boolean
}

type j = b & c
type l = b | c
interface IObj extends j {
  name: string
}
let a: IObj = {
  name: 'qqq',
  age: 12,
}

function test<T extends j>(a: T[]): T {
  return a[0]
}
const foo: j = {
  age: 111,
  x: true,
}

test<j>([foo])

function test2<T extends l>(a: T[]): T {
  return a[0]
}
const foo2: l = {
  age: 111,
}

test2<l>([foo2])
