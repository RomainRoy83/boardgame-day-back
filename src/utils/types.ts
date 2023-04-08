export type CreateGameParams = {
  game_name: string
  cover: string
  rules: string
  weight: number
}

export type UpdateGameParams = {
  game_name?: string
  cover?: string
  rules?: string
  votes?: number
  weight?: number
}

export type CreateCategoryParams = {
  category_name: string
}

export type CreateMechanismParams = {
  mechanism_name: string
}

export type UpdateMechanismParams = {
  mechanism_name: string
}
