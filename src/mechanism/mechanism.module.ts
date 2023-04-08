import { Module } from "@nestjs/common"
import { MechanismController } from "./controllers/mechanism/mechanism.controller"
import { MechanismService } from "./services/mechanism/mechanism.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Mechanism } from "../typeorm/entities/Mechanism"

@Module({
  imports: [TypeOrmModule.forFeature([Mechanism])],
  controllers: [MechanismController],
  providers: [MechanismService],
})
export class MechanismModule {}
