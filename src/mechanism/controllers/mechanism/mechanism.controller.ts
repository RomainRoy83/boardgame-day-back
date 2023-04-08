import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common"
import { MechanismService } from "../../services/mechanism/mechanism.service"
import { CreateMechanismDto } from "../../dtos/CreateMechanism.dto"
import { UpdateMechanismDto } from "../../dtos/UpdateMechanism.dto"

@Controller("mechanism")
export class MechanismController {
  constructor(private mechanismsService: MechanismService) {}

  @Get()
  getAllMechanisms() {
    return this.mechanismsService.findAllMechanisms()
  }

  @Get(":id")
  async getOneMechanism(@Param("id", ParseIntPipe) id: number) {
    await this.mechanismsService.findOneMechanism(id)
  }

  @Post()
  createMechanism(@Body() createMechanismDto: CreateMechanismDto) {
    return this.mechanismsService.createMechanism(createMechanismDto)
  }

  @Put(":id")
  async updateMechanismById(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateMechanismDto: UpdateMechanismDto,
  ) {
    await this.mechanismsService.updateMechanism(id, updateMechanismDto)
  }

  @Delete(":id")
  async deleteMechanismById(@Param("id", ParseIntPipe) id: number) {
    await this.mechanismsService.deleteMechanism(id)
  }
}
