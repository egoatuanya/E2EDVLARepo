package uk.gov.dvla.services;

import java.io.File;

import org.junit.Test;
import uk.co.gov.utilities.FileReader;
import uk.co.gov.utilities.FileReaderUtil;

import java.io.File;

public class FileReaderTest {
    private FileReader fileReader;
    private FileReaderUtil fileReaderUtil;


    @Test
    public void getAllFilesFromDirectory() {
        fileReader = new FileReader();
        File[] fileList = fileReader.getAllFiles();
        System.out.println("Number of files in root Directory: " + fileList.length);

        for (File file : fileList) {
            System.out.println(file.getName());
        }
    }

    @Test
    public void getASingleFile() {
        fileReader = new FileReader();
        File file = fileReader.getASingleFile("file2.csv");
        System.out.println(file.getName());
    }


    @Test
    public void displayFileInformation() {
        fileReader = new FileReader();
        fileReader.displayFileInformation();
    }

    @Test
    public void displayVehicleDetails() {
        fileReader = new FileReader();
        fileReader.displayVehicleDetails();
    }

    @Test
    public void getVehicleRegistration() {
        fileReaderUtil = new FileReaderUtil();
        fileReaderUtil.getVehicleRegistration("file3.csv");
    }

    @Test
    public void getVehicleMake() {
        fileReaderUtil = new FileReaderUtil();
        fileReaderUtil.getVehicleMake("file3.csv");
    }

    @Test
    public void getVehicleColour() {
        fileReaderUtil = new FileReaderUtil();
        fileReaderUtil.getVehicleColour("file3.csv");
    }

    @Test
    public void getVehicleDetails() {
        fileReaderUtil = new FileReaderUtil();
        fileReaderUtil.getVehicleDetails("file3.csv");
    }
}
