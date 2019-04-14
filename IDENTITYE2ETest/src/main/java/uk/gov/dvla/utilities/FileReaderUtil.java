package uk.gov.dvla.utilities;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;


public class FileReaderUtil {

    private static String rootDir = System.getProperty("user.dir") + "/src/test/resources/VehicleData/";
    private String vehicleReg;
    private String vehicleMake;
    private String vehicleColour;

    private BufferedReader bufferedReader = null;
    private String line;
    private String cvsSpiltBy = ",";


    public String getVehicleRegistration(String file) {
        String filePath = rootDir + file;
        try {
            bufferedReader = new BufferedReader(new java.io.FileReader(filePath));
            while ((line = bufferedReader.readLine()) != null) {
                String[] vehicleData = line.split(cvsSpiltBy);
                vehicleReg = vehicleData[0];

                System.out.println(file + " - Vehicle Registration: " + vehicleData[0]);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return vehicleReg;
    }


    public String getVehicleMake(String file) {
        String filePath = rootDir + file;
        try {
            bufferedReader = new BufferedReader(new java.io.FileReader(filePath));
            while ((line = bufferedReader.readLine()) != null) {
                String[] vehicleData = line.split(cvsSpiltBy);
                vehicleMake = vehicleData[1];

                System.out.println(file + " - Vehicle Make: " + vehicleData[1]);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return vehicleMake;
    }


    public String getVehicleColour(String file) {
        String filePath = rootDir + file;
        try {
            bufferedReader = new BufferedReader(new java.io.FileReader(filePath));
            while ((line = bufferedReader.readLine()) != null) {
                String[] vehicleData = line.split(cvsSpiltBy);
                vehicleColour = vehicleData[2];

                System.out.println(file + " - Vehicle Colour: " + vehicleData[2]);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return vehicleColour;
    }

    public ArrayList<String> getVehicleDetails(String file) {
        String filePath = rootDir + file;
        ArrayList<String> vehicleDetails = new ArrayList<>();
        try {
            bufferedReader = new BufferedReader(new java.io.FileReader(filePath));
            while ((line = bufferedReader.readLine()) != null) {
                String[] vehicleData = line.split(cvsSpiltBy);
                vehicleDetails.add(vehicleData[0]);
                vehicleDetails.add(vehicleData[1]);
                vehicleDetails.add(vehicleData[2]);

                System.out.println(file + " - Vehicles Registration: " + vehicleData[0] + " - Vehicles Make: " + vehicleData[1] + " - Vehicles Colour: " + vehicleData[2]);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return vehicleDetails;
    }
}

