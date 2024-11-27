package com.ai.photogen.Controllers;

import com.ai.photogen.Services.ChatService;
import com.ai.photogen.Services.ImageService;
import com.ai.photogen.Services.RecipeService;
import org.springframework.ai.image.ImageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GenAiController {

    @Autowired
    ChatService chatService;

    @Autowired
    ImageService imageService;

    @Autowired
    RecipeService recipeService;

    @GetMapping("/ask")
    public String getResponse(@RequestParam String prompt){
        return chatService.getResponse(prompt);
    }

    @GetMapping("/ask-options")
    public String getResponseOptions(@RequestParam String prompt){
        return chatService.getResponseOptions(prompt);
    }

    @GetMapping("/generate-image")
    public List<String> getImageResponse(@RequestParam String prompt,@RequestParam(defaultValue = "standard") String quality,@RequestParam(defaultValue = "1") int n, @RequestParam(defaultValue = "1024") int height, @RequestParam(defaultValue = "1024") int width){
        ImageResponse response = imageService.getImageResponse(prompt,quality,n,height,width);
        List<String> imageUrls =  response.getResults().stream()
                .map(result -> result.getOutput().getUrl())
                .toList();

        return imageUrls;
    }

    @GetMapping("/create-recipe")
    public String createRecipe(@RequestParam String ingredients, @RequestParam(defaultValue = "any") String cuisine, @RequestParam(defaultValue = "") String dietaryRestrictions){
        return recipeService.createRecipe(ingredients,cuisine,dietaryRestrictions);
    }

}
