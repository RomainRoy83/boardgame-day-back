import { Test, TestingModule } from "@nestjs/testing"
import { MechanismService } from "./mechanism.service"

describe("MechanismsService", () => {
  let service: MechanismService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechanismService],
    }).compile()

    service = module.get<MechanismService>(MechanismService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
