import { Test, TestingModule } from "@nestjs/testing"
import { MechanismController } from "./mechanism.controller"

describe("MechanismsController", () => {
  let controller: MechanismController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechanismController],
    }).compile()

    controller = module.get<MechanismController>(MechanismController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })
})
