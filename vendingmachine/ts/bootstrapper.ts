/// <reference path="VendingMachine.ts" />

var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);