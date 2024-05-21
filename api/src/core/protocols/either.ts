export class Right<R, L> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<R, L> {
    return true
  }

  isLeft(): this is Left<R, L> {
    return false
  }
}

export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isLeft(): this is Left<L, R> {
    return true
  }

  isRight(): this is Right<L, R> {
    return false
  }
}

export type Either<L, R> = Left<L, R> | Right<R, L>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left<L, R>(value)
}

export const right = <R, L>(value: R): Either<R, L> => {
  return new Right<R, L>(value)
}
